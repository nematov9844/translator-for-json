import { translateText } from "./translate.js";
import { shouldTranslate } from "./shouldTranslate.js";

export async function walk(
    value: any,
    to: string,
    force = false
  ): Promise<any> {
  if (Array.isArray(value)) {
    return await Promise.all(value.map((v) => walk(v, to)));
  }

  if (typeof value === "object" && value !== null) {
    const result: any = {};

    for (const key in value) {
      const val = value[key];

      if (typeof val === "string") {
        if (force || shouldTranslate(key, val)) {
          result[key] = await translateText(val, to);
        } else {
          result[key] = val;
        }
      }
    }

    return result;
  }

  return value;
}