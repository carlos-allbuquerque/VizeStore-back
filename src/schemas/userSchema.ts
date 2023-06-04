import Joi from "joi";
import { CreateUserData } from "../types/userType";

export const userSchema = Joi.object<CreateUserData>({
  email: Joi.string()
    .email()
    .regex(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)
    .required(),
  password: Joi.string().min(8).required(),
});
