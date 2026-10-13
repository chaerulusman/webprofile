import { boolean, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

// Users table managed via Firebase Authentication
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  uid: text('uid').notNull().unique(), // Firebase Auth UID
  email: text('email').notNull(),
  displayName: text('display_name'),
  photoUrl: text('photo_url'),
  role: text('role').default('MEMBER').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

// Inbound Request for Proposal / Quotes
export const inboundQuotes = pgTable('inbound_quotes', {
  id: serial('id').primaryKey(),
  quoteCode: text('quote_code').notNull(),
  name: text('name').notNull(),
  company: text('company').notNull(),
  email: text('email').notNull(),
  phone: text('phone').notNull(),
  serviceId: text('service_id').notNull(),
  budgetRange: text('budget_range'),
  targetTimeline: text('target_timeline'),
  projectScope: text('project_scope'),
  hasNda: boolean('has_nda').default(false).notNull(),
  status: text('status').default('Baru').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

// Inbound Career Applications
export const inboundApplications = pgTable('inbound_applications', {
  id: serial('id').primaryKey(),
  jobId: text('job_id').notNull(),
  jobTitle: text('job_title').notNull(),
  fullName: text('full_name').notNull(),
  email: text('email').notNull(),
  phone: text('phone').notNull(),
  yearsExp: text('years_exp'),
  linkedinUrl: text('linkedin_url'),
  portfolioUrl: text('portfolio_url'),
  fileName: text('file_name'),
  coverLetter: text('cover_letter'),
  status: text('status').default('Screening').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

// Inbound Contact Messages
export const inboundMessages = pgTable('inbound_messages', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  phone: text('phone'),
  company: text('company'),
  topic: text('topic'),
  message: text('message').notNull(),
  status: text('status').default('Belum Dibaca').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

// Dynamic Company Settings / Profile JSON
export const companySettings = pgTable('company_settings', {
  id: serial('id').primaryKey(),
  key: text('key').notNull().unique(),
  data: text('data').notNull(),
  updatedAt: timestamp('updated_at').defaultNow(),
});
