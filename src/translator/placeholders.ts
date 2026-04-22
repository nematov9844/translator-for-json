export function protectPlaceholders(text: string) {
    const placeholders: string[] = [];
  
    const protectedText = text.replace(
      /%\d+|\{[^}]+\}|:[a-zA-Z_][a-zA-Z0-9_]*/g,
      (match) => {
        const token = `__PH_${placeholders.length}__`;
        placeholders.push(match);
        return token;
      }
    );
  
    return { protectedText, placeholders };
  }
  
  export function restorePlaceholders(text: string, placeholders: string[]) {
    let result = text;
  
    placeholders.forEach((value, index) => {
      result = result.replace(`__PH_${index}__`, value);
    });
  
    return result;
  }