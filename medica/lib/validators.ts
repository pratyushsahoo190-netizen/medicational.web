import { z } from "zod";

export const appointmentSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Valid email is required"),
  phone: z
    .string()
    .min(7, "Phone is required")
    .regex(/^[+()\-\d\s]{7,}$/i, "Invalid phone format"),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  doctor: z.string().min(1, "Please select a doctor"),
  reason: z.string().min(10, "Please describe your reason (min 10 chars)"),
  agreeToPolicies: z.boolean().refine((v) => v, "You must agree to the policies"),
});

export type AppointmentInput = z.infer<typeof appointmentSchema>;