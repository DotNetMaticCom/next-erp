// src/lib/utils.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { lighten, darken } from 'polished'; // polished kütüphanesini yüklediğinizden emin olun

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Belirtilen oranda rengi açar
export function lightenColor(color: string, amount: number): string {
  if (amount < 0 || amount > 1) {
    // console.warn("lightenColor amount should be between 0 and 1.");
    return color;
  }
  try {
    return lighten(amount, color);
  } catch (e) {
    // console.warn(`Polished lightenColor error for color: ${color}`, e);
    return color; // Hata durumunda orijinal rengi döndür
  }
}

// Belirtilen oranda rengi koyulaştırır
export function darkenColor(color: string, amount: number): string {
  if (amount < 0 || amount > 1) {
    // console.warn("darkenColor amount should be between 0 and 1.");
    return color;
  }
  try {
    return darken(amount, color);
  } catch (e) {
    // console.warn(`Polished darkenColor error for color: ${color}`, e);
    return color; // Hata durumunda orijinal rengi döndür
  }
}