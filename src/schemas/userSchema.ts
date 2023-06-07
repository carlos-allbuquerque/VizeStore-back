import Joi from "joi";
import { NewUserData } from "../types/userType";

export const newUserSchema = Joi.object<NewUserData>({
  email: Joi.string()
    .email()
    .regex(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)
    .required(),
  password: Joi.string().min(8).required(),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
});

export const userSchema = Joi.object<NewUserData>({
  email: Joi.string()
    .email()
    .regex(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)
    .required(),
  password: Joi.string().min(8).required(),
});