import { db } from './index.ts';
import { users } from './schema.ts';
import { eq } from 'drizzle-orm';

export interface UpsertUserInput {
  uid: string;
  email: string;
  displayName?: string | null;
  photoUrl?: string | null;
  role?: string;
}

export async function getOrCreateUser(input: UpsertUserInput) {
  try {
    const result = await db
      .insert(users)
      .values({
        uid: input.uid,
        email: input.email,
        displayName: input.displayName || null,
        photoUrl: input.photoUrl || null,
        role: input.role || 'MEMBER',
      })
      .onConflictDoUpdate({
        target: users.uid,
        set: {
          email: input.email,
          displayName: input.displayName || null,
          photoUrl: input.photoUrl || null,
        },
      })
      .returning();

    return result[0];
  } catch (error) {
    console.error('Database user registration failed:', error);
    throw new Error('Database query failed. Please try again later.', { cause: error });
  }
}

export async function getUserByUid(uid: string) {
  try {
    const result = await db.select().from(users).where(eq(users.uid, uid)).limit(1);
    return result[0] || null;
  } catch (error) {
    console.error('Database getUserByUid failed:', error);
    throw new Error('Database query failed. Please try again later.', { cause: error });
  }
}

export async function getUsers() {
  try {
    return await db.select().from(users);
  } catch (error) {
    console.error('Database getUsers failed:', error);
    throw new Error('Database query failed. Please try again later.', { cause: error });
  }
}
