import Plunk from "@plunk/node";

if (!process.env.PLUNK_API_KEY) {
  throw new Error("PLUNK_API_KEY is not set");
}

export const plunk = new Plunk(process.env.PLUNK_API_KEY);
