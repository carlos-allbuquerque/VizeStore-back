import { prisma } from "../database/db.js";
import { CreateUserData } from "../types/userType.js";

export async function insertUser(user: CreateUserData) {
  return await prisma.users.create({ data: user });
}

export async function getUserByEmail(email: string) {
  return await prisma.users.findUnique({ where: { email } });
}

export async function findById(id: number) {
  return await prisma.users.findUnique({
    where: { id },
  });
}
