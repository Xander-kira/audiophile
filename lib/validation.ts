import { z } from "zod";

export const checkoutSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter a valid phone"),
  address: z.string().min(5, "Address is required"),
  city: z.string().min(2, "City is required"),
  country: z.string().min(2, "Country is required"),
  zip: z.string().min(3, "ZIP/Postal code is required"),
});

export type CheckoutValues = z.infer<typeof checkoutSchema>;
