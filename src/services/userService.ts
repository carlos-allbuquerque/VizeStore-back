import { Users } from "@prisma/client";
import { CreateUserData } from "../types/userType";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config({ path: ".env" });

import * as userRepository from "../repositories/userRepository.js";
import {
  conflictError,
  notFoundError,
  unauthorizedError,
} from "../utils/errorUtils.js";

export async function createUser(user: CreateUserData) {
  const userExists = await userRepository.getUserByEmail(user.email);
  console.log(userExists);
  if (userExists) {
    throw conflictError();
  }

  const SALT = 10;
  const hashedPassword = bcrypt.hashSync(user.password, SALT);
  await userRepository.insertUser({ ...user, password: hashedPassword });
}

export async function login(login: CreateUserData) {
  const user = await getUserOrFail(login);
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
  return token;
}

export async function getUserOrFail(login: CreateUserData) {
  const user = await userRepository.getUserByEmail(login.email);

  if (!user) throw unauthorizedError("Invalid credentials.");

  const isPasswordValid = bcrypt.compareSync(login.password, user.password);
  if (!isPasswordValid) throw unauthorizedError("Invalid credentials");

  return user;
}

export async function findUserById(id: number) {
  const user = await userRepository.findById(id);
  if (!user) throw notFoundError("User not found");

  return user;
}
