import { db } from './index.ts';
import { inboundQuotes, inboundApplications, inboundMessages, companySettings } from './schema.ts';
import { desc, eq } from 'drizzle-orm';

export async function insertQuote(data: {
  quoteCode: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  serviceId: string;
  budgetRange?: string;
  targetTimeline?: string;
  projectScope?: string;
  hasNda?: boolean;
}) {
  try {
    const res = await db.insert(inboundQuotes).values({
      quoteCode: data.quoteCode,
      name: data.name,
      company: data.company,
      email: data.email,
      phone: data.phone,
      serviceId: data.serviceId,
      budgetRange: data.budgetRange || null,
      targetTimeline: data.targetTimeline || null,
      projectScope: data.projectScope || null,
      hasNda: !!data.hasNda,
      status: 'Baru',
    }).returning();
    return res[0];
  } catch (error) {
    console.error('Database insertQuote failed:', error);
    throw new Error('Database query failed. Please try again later.', { cause: error });
  }
}

export async function getQuotes() {
  try {
    return await db.select().from(inboundQuotes).orderBy(desc(inboundQuotes.createdAt));
  } catch (error) {
    console.error('Database getQuotes failed:', error);
    throw new Error('Database query failed. Please try again later.', { cause: error });
  }
}

export async function insertApplication(data: {
  jobId: string;
  jobTitle: string;
  fullName: string;
  email: string;
  phone: string;
  yearsExp?: string;
  linkedinUrl?: string;
  portfolioUrl?: string;
  fileName?: string;
  coverLetter?: string;
}) {
  try {
    const res = await db.insert(inboundApplications).values({
      jobId: data.jobId,
      jobTitle: data.jobTitle,
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      yearsExp: data.yearsExp || null,
      linkedinUrl: data.linkedinUrl || null,
      portfolioUrl: data.portfolioUrl || null,
      fileName: data.fileName || null,
      coverLetter: data.coverLetter || null,
      status: 'Screening',
    }).returning();
    return res[0];
  } catch (error) {
    console.error('Database insertApplication failed:', error);
    throw new Error('Database query failed. Please try again later.', { cause: error });
  }
}

export async function getApplications() {
  try {
    return await db.select().from(inboundApplications).orderBy(desc(inboundApplications.createdAt));
  } catch (error) {
    console.error('Database getApplications failed:', error);
    throw new Error('Database query failed. Please try again later.', { cause: error });
  }
}

export async function insertMessage(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  topic?: string;
  message: string;
}) {
  try {
    const res = await db.insert(inboundMessages).values({
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      company: data.company || null,
      topic: data.topic || null,
      message: data.message,
      status: 'Belum Dibaca',
    }).returning();
    return res[0];
  } catch (error) {
    console.error('Database insertMessage failed:', error);
    throw new Error('Database query failed. Please try again later.', { cause: error });
  }
}

export async function getMessages() {
  try {
    return await db.select().from(inboundMessages).orderBy(desc(inboundMessages.createdAt));
  } catch (error) {
    console.error('Database getMessages failed:', error);
    throw new Error('Database query failed. Please try again later.', { cause: error });
  }
}

export async function saveCompanySetting(key: string, dataObj: any) {
  try {
    const res = await db.insert(companySettings).values({
      key,
      data: JSON.stringify(dataObj),
    }).onConflictDoUpdate({
      target: companySettings.key,
      set: {
        data: JSON.stringify(dataObj),
        updatedAt: new Date(),
      },
    }).returning();
    return res[0];
  } catch (error) {
    console.error('Database saveCompanySetting failed:', error);
    throw new Error('Database query failed. Please try again later.', { cause: error });
  }
}

export async function getCompanySetting(key: string) {
  try {
    const res = await db.select().from(companySettings).where(eq(companySettings.key, key)).limit(1);
    if (!res[0]) return null;
    return JSON.parse(res[0].data);
  } catch (error) {
    console.error('Database getCompanySetting failed:', error);
    throw new Error('Database query failed. Please try again later.', { cause: error });
  }
}
