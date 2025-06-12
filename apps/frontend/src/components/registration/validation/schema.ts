import { z } from 'zod';

export const registrationSchema = z
  .object({
    email: z.string().email('Please enter a valid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string().min(8, 'Password must be at least 8 characters'),
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    companyName: z.string().min(1, 'Company name is required'),
    country: z.string().min(1, 'Country is required'),
    timezone: z.string().min(1, 'Timezone is required'),
    agreement: z.literal(true),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        path: ['confirmPassword'],
        code: z.ZodIssueCode.custom,
        message: 'Passwords do not match',
      });
    }
  });

type RegistrationData = z.infer<typeof registrationSchema>;
type Errors = Partial<Record<keyof RegistrationData, string>>;
