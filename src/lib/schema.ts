import { z } from "zod";

export const quoteSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional().or(z.literal("")),
  service: z.string().min(1, "Please choose a service."),
  message: z.string().min(10, "Tell us a little more about your project (10+ characters).").max(2000),
});

export type QuoteFormValues = z.infer<typeof quoteSchema>;
