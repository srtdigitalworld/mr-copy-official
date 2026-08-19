import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createStoredFile, listStoredFiles, removeStoredFile } from "./db";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { protectedProcedure, publicProcedure, router } from "./_core/trpc";
import { storagePut } from "./storage";
import { COOKIE_NAME } from "../shared/const";
import { safeFileName, validateFileUpload } from "./fileUploadValidation";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(({ ctx }) => ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      ctx.res.clearCookie(COOKIE_NAME, { ...getSessionCookieOptions(ctx.req), maxAge: -1 });
      return { success: true } as const;
    }),
  }),
  files: router({
    list: protectedProcedure.query(({ ctx }) => listStoredFiles(ctx.user.id)),
    upload: protectedProcedure.input(z.object({
      fileName: z.string().min(1).max(255),
      mimeType: z.string().min(1).max(255),
      dataBase64: z.string().min(1).max(14_000_000),
    })).mutation(async ({ ctx, input }) => {
      const validation = validateFileUpload(input.mimeType, input.dataBase64);
      if (!validation.valid) throw new TRPCError({ code: "BAD_REQUEST", message: validation.message });
      const fileName = safeFileName(input.fileName);
      const { key, url } = await storagePut(`mr-copy/${ctx.user.id}/${Date.now()}-${fileName}`, validation.bytes, input.mimeType);
      return createStoredFile({ userId: ctx.user.id, fileName, storageKey: key, storageUrl: url, mimeType: input.mimeType, sizeBytes: validation.bytes.length });
    }),
    remove: protectedProcedure.input(z.object({ id: z.number().int().positive() })).mutation(async ({ ctx, input }) => {
      const removed = await removeStoredFile(ctx.user.id, input.id);
      if (!removed) throw new TRPCError({ code: "NOT_FOUND", message: "File not found." });
      return { success: true } as const;
    }),
  }),
});

export type AppRouter = typeof appRouter;
