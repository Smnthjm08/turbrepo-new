// import { PrismaClient } from "../generated/prisma";

// export const prisma = new PrismaClient();

// export { PrismaClient };
import { PrismaClient } from "../prisma/generated/client"; // <- matches output path

// Singleton pattern so we don’t open too many DB connections
const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma || new PrismaClient({ log: ["query"] });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// Export both instance and type
export { PrismaClient };

export * from "../prisma/generated/client";
