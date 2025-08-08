import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'The Name is short').max(100, 'Long Name'),
  email: z.string().email('Invalid email'),
  message: z.string().min(10, 'The message is short').max(2000, 'The message is too long'),
});

export type ContactFormType = z.infer<typeof contactSchema>;
