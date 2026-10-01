"use server";

import { render } from "@react-email/render";
import { z } from "zod";
import { plunk } from "@/lib/plunk";
import GetInTouchEmail from "./GetInTouch";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export interface SendResult {
  success: boolean;
  error?: string;
}

export async function sendGetInTouch(values: {
  name: string;
  email: string;
  message: string;
}): Promise<SendResult> {
  // Never trust client-side validation alone — re-validate on the server
  const parsed = schema.safeParse(values);
  if (!parsed.success) {
    return { success: false, error: "Invalid form data." };
  }

  const { name, email, message } = parsed.data;
  const subject = `New message from ${name}`;

  try {
    const html = await render(
      GetInTouchEmail({ name, email, subject, message }),
    );

    await plunk.emails.send({
      to: "odionsamuel2005@gmail.com",
      subject,
      body: html,
      type: "html",
    });

    return { success: true };
  } catch (err) {
    console.error("sendGetInTouch failed:", err);
    return {
      success: false,
      error: "Something went wrong sending your message.",
    };
  }
}
