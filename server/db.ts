import { and, desc, eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertStoredFile, InsertUser, storedFiles, users } from "../drizzle/schema";
import { ENV } from "./_core/env";

let database: ReturnType<typeof drizzle> | null = null;

export async function getDb() {
  if (!database && process.env.DATABASE_URL) {
    database = drizzle(process.env.DATABASE_URL);
  }
  return database;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) throw new Error("User openId is required");
  const db = await getDb();
  if (!db) throw new Error("Database is not available");

  const values: InsertUser = { ...user, lastSignedIn: user.lastSignedIn ?? new Date() };
  if (!values.role && user.openId === ENV.ownerOpenId) values.role = "admin";
  await db.insert(users).values(values).onDuplicateKeyUpdate({
    set: {
      name: values.name ?? null,
      email: values.email ?? null,
      loginMethod: values.loginMethod ?? null,
      lastSignedIn: values.lastSignedIn,
    },
  });
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);
  return result[0];
}

export async function createStoredFile(file: InsertStoredFile) {
  const db = await getDb();
  if (!db) throw new Error("Database is not available");
  const result = await db.insert(storedFiles).values(file).$returningId();
  const id = result[0]?.id;
  if (!id) throw new Error("Unable to save file metadata");
  const saved = await db.select().from(storedFiles).where(eq(storedFiles.id, id)).limit(1);
  return saved[0]!;
}

export async function listStoredFiles(userId: number) {
  const db = await getDb();
  if (!db) throw new Error("Database is not available");
  return db.select().from(storedFiles).where(eq(storedFiles.userId, userId)).orderBy(desc(storedFiles.createdAt));
}

export async function removeStoredFile(userId: number, fileId: number) {
  const db = await getDb();
  if (!db) throw new Error("Database is not available");
  const files = await db.select().from(storedFiles).where(and(eq(storedFiles.id, fileId), eq(storedFiles.userId, userId))).limit(1);
  const file = files[0];
  if (!file) return undefined;
  await db.delete(storedFiles).where(and(eq(storedFiles.id, fileId), eq(storedFiles.userId, userId)));
  return file;
}
