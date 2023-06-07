import { Users } from "@prisma/client";

export type CreateUserData = Omit<Users, "id" | "createdAt">;

export type NewUserData = {
  email: string;
  password: string;
  confirmPassword: string;
};
