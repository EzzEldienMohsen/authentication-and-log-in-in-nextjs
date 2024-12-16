'use server';

import { createUser } from '@/lib/user';
import { z } from 'zod';

// zod schema
const SignupSchema = z.object({
  email: z.string().email({ message: 'Please insert a valid email address' }),
  password: z
    .string()
    .min(8, { message: 'Password must have at least 8 characters' }),
});

export const signup = (prevState, formData) => {
  const email = formData.get('email');
  const password = formData.get('password');
  // Zod Validation
  const result = SignupSchema.safeParse({ email, password });

  if (!result.success) {
    // Extract errors and return in the format expected by the form
    const errors = result.error.flatten().fieldErrors;
    return { errors };
  }

  //   //   Manual Validation
  //   let errors = {};
  //   if (!email.includes('@')) {
  //     errors.email = 'Please insert a valid email address';
  //   }
  //   if (password.trim().length < 8) {
  //     errors.password = 'Password must have at least 8 characters';
  //   }
  //   if (Object.keys(errors).length > 0) return { errors };

  //   Database Functionality

  createUser(email, password);
};
