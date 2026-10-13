import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import * as dotenv from 'dotenv';
import { requireAuth, AuthRequest } from './src/middleware/auth.ts';
import { getOrCreateUser, getUserByUid } from './src/db/users.ts';
import { 
  insertQuote, 
  getQuotes, 
  insertApplication, 
  getApplications, 
  insertMessage, 
  getMessages,
  saveCompanySetting,
  getCompanySetting
} from './src/db/leads.ts';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());

// API: User Sync after Firebase Auth sign-in
app.post('/api/auth/sync-user', requireAuth, async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    const user = await getOrCreateUser({
      uid: req.user.uid,
      email: req.user.email || '',
      displayName: (req.user as any).name || null,
      photoUrl: (req.user as any).picture || null,
    });
    res.json({ success: true, user });
  } catch (err: any) {
    console.error('Error in /api/auth/sync-user:', err);
    res.status(500).json({ error: 'Failed to sync user profile' });
  }
});

// API: Current User
app.get('/api/auth/me', requireAuth, async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    const user = await getUserByUid(req.user.uid);
    res.json({ user });
  } catch (err: any) {
    console.error('Error in /api/auth/me:', err);
    res.status(500).json({ error: 'Failed to fetch user' });
  }
});

// API: Inbound Quotes / RFPs
app.post('/api/quotes', async (req: Request, res: Response) => {
  try {
    const { quoteCode, name, company, email, phone, serviceId, budgetRange, targetTimeline, projectScope, hasNda } = req.body;
    if (!name || !email || !phone) {
      return res.status(400).json({ error: 'Nama, email, dan nomor telepon wajib diisi' });
    }
    const record = await insertQuote({
      quoteCode: quoteCode || `ANO-RFP-${Date.now().toString().slice(-4)}`,
      name,
      company: company || 'Individu',
      email,
      phone,
      serviceId: serviceId || 'enterprise-software',
      budgetRange,
      targetTimeline,
      projectScope,
      hasNda,
    });
    res.json({ success: true, quote: record });
  } catch (err: any) {
    console.error('Error saving quote to Cloud SQL:', err);
    res.status(500).json({ error: 'Gagal menyimpan penawaran' });
  }
});

app.get('/api/quotes', async (_req: Request, res: Response) => {
  try {
    const quotes = await getQuotes();
    res.json({ quotes });
  } catch (err: any) {
    console.error('Error fetching quotes from Cloud SQL:', err);
    res.status(500).json({ error: 'Gagal mengambil data penawaran' });
  }
});

// API: Inbound Job Applications
app.post('/api/applications', async (req: Request, res: Response) => {
  try {
    const { jobId, jobTitle, fullName, email, phone, yearsExp, linkedinUrl, portfolioUrl, fileName, coverLetter } = req.body;
    if (!fullName || !email || !phone) {
      return res.status(400).json({ error: 'Nama lengkap, email, dan telepon wajib diisi' });
    }
    const application = await insertApplication({
      jobId: jobId || 'general-application',
      jobTitle: jobTitle || 'General Career Application',
      fullName,
      email,
      phone,
      yearsExp,
      linkedinUrl,
      portfolioUrl,
      fileName,
      coverLetter,
    });
    res.json({ success: true, application });
  } catch (err: any) {
    console.error('Error saving job application to Cloud SQL:', err);
    res.status(500).json({ error: 'Gagal mengirim berkas lamaran' });
  }
});

app.get('/api/applications', async (_req: Request, res: Response) => {
  try {
    const apps = await getApplications();
    res.json({ applications: apps });
  } catch (err: any) {
    console.error('Error fetching job applications from Cloud SQL:', err);
    res.status(500).json({ error: 'Gagal mengambil data lamaran' });
  }
});

// API: Inbound Messages
app.post('/api/messages', async (req: Request, res: Response) => {
  try {
    const { name, email, phone, company, topic, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Nama, email, dan pesan wajib diisi' });
    }
    const msg = await insertMessage({
      name,
      email,
      phone,
      company,
      topic,
      message,
    });
    res.json({ success: true, message: msg });
  } catch (err: any) {
    console.error('Error saving message to Cloud SQL:', err);
    res.status(500).json({ error: 'Gagal mengirim pesan kontak' });
  }
});

app.get('/api/messages', async (_req: Request, res: Response) => {
  try {
    const msgs = await getMessages();
    res.json({ messages: msgs });
  } catch (err: any) {
    console.error('Error fetching messages from Cloud SQL:', err);
    res.status(500).json({ error: 'Gagal mengambil pesan kontak' });
  }
});

// API: Company Info settings
app.get('/api/company-settings', async (_req: Request, res: Response) => {
  try {
    const info = await getCompanySetting('company_info');
    res.json({ companyInfo: info });
  } catch (err: any) {
    console.error('Error fetching company settings:', err);
    res.status(500).json({ error: 'Gagal mengambil pengaturan perusahaan' });
  }
});

app.post('/api/company-settings', async (req: Request, res: Response) => {
  try {
    const saved = await saveCompanySetting('company_info', req.body);
    res.json({ success: true, saved });
  } catch (err: any) {
    console.error('Error saving company settings:', err);
    res.status(500).json({ error: 'Gagal menyimpan pengaturan perusahaan' });
  }
});

// Frontend Vite Integration (Development middleware vs Production static)
async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`PT Anonim server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
