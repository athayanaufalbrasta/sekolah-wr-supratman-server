import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
// let prisma;

// if (process.env.NODE_ENV === "production") {
// } else {
// 	if (!global.prisma) {
// 		global.prisma = new PrismaClient();
// 	}
// 	prisma = global.prisma;
// }

export default prisma;
