import { z } from 'zod';

export const EmployeeSchema = z.object({
  id: z.string(),
  name: z.string(),
  job: z.string(),
  admission_date: z.string(),
  phone: z.string(),
  image: z.string().url(),
});

export type Employee = z.infer<typeof EmployeeSchema>;
