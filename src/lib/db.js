import { PrismaClient } from "@prisma/client";
// import { PrismaClient } from '../generated/prisma'


const db = globalThis.prisma || new PrismaClient() || new Prisma();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;

export default db;
