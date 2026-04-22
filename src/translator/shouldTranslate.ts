export function shouldTranslate(key: string, value: any): boolean {
    if (typeof value !== "string") return false;
  
    // bo‘sh string
    if (!value.trim()) return false;
  
    // key bilan bir xil bo‘lsa
    if (key === value) return true;
  
    return false;
  }