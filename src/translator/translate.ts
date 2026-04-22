import { execa } from "execa";
import { protectPlaceholders, restorePlaceholders } from "./placeholders.js";

const cache = new Map<string, string>();

export async function translateText(text: string, to: string) {
  // 🔥 cache check
  if (cache.has(text)) {
    return cache.get(text)!;
  }

  try {
    const { protectedText, placeholders } = protectPlaceholders(text);

    const { stdout } = await execa("trans", ["-b", `:${to}`, protectedText]);

    const result = restorePlaceholders(stdout.trim(), placeholders);

    // 🔥 cache save
    cache.set(text, result);

    return result;
  } catch (err) {
    console.error("Translate error:", text);
    return text;
  }
}