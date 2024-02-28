import { z } from "zod";

export const SignUpSchema = z.object({
  business_name: z.string().min(4, "Business Name is required"),
  name: z.string().min(4, "Name is required"),
  email: z.string().email("Email is required"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  phone_number: z.string().length(11, "Number must be 11 digits"),
  t_and_c: z.boolean().refine((value) => value === true, {
    message: "Please accept the terms and conditions",
  }),
});
export const LogInSchema = z.object({
  email: z.string().email("Invalid Username/password"),
  password: z.string().min(8, "Invalid Username/password"),
});

export const ResetPasswordSchema = z
  .object({
    new_password: z.string().min(8, "Password must be at least 8 characters"),
    confirm_password: z
      .string()
      .min(8, "Password must be at least 8 characters"),
  })
  .refine((data) => data.new_password === data.confirm_password, {
    message: "Password must match",
    path: ["confirm_password"],
  });
