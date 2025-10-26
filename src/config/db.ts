import { PrismaClient } from "@prisma/client";
import { config } from "dotenv";
config()

const globalForPrisma = globalThis as unknown as {
	prisma: PrismaClient | undefined;
};

export const prisma: PrismaClient = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV === "development") {
	globalForPrisma.prisma = prisma;
}

export default prisma;
