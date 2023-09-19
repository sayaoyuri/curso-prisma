import { Product } from "@prisma/client";
import Joi from "joi";

export const productSchema = Joi.object<Product>({
  label: Joi.string().required(),
  price: Joi.number().required(),
  description: Joi.string().required(),
  expirationDate: Joi.date().required(),
  eatable: Joi.boolean().optional()
})