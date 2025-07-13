import { z } from 'zod';
import { IRequestSchema } from '../../../types';

export const createUserBodySchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  country: z.string().min(1),
  timezone: z.string().min(1),
  password: z.string().min(1),
});

export const createUserResponseSchema = z.object({
  userId: z.string().min(1),
});

export const createUserSchema: IRequestSchema = {
  body: createUserBodySchema,
  response: createUserResponseSchema,
};  
