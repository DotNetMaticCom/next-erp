// src/themes/sunset-theme/sunset-hsl-parts.ts
import type { RawThemeHSLParts } from '../theme-types';

export const sunsetLightHSLParts: RawThemeHSLParts = {
  'primary-h': '25', 'primary-s': '85%', 'primary-l': '50%', // Canlı turuncu
  'primary-foreground-h': '25', 'primary-foreground-s': '30%', 'primary-foreground-l': '98%',
  'secondary-h': '45', 'secondary-s': '90%', 'secondary-l': '58%', // Parlak sarı
  'secondary-foreground-h': '45', 'secondary-foreground-s': '50%', 'secondary-foreground-l': '15%',
  'accent-h': '5', 'accent-s': '70%', 'accent-l': '48%',   // Kırmızı/kızıl
  'accent-foreground-h': '5', 'accent-foreground-s': '30%', 'accent-foreground-l': '98%',

  'neutral-default-h': '30', 'neutral-default-s': '15%', // Hafif turuncumsu-bej
  'neutral-0-l': '99%',   // Çok açık bej (card bg)
  'neutral-50-l': '96%',  // Sayfa arkaplanı
  'neutral-100-l': '93%', // Muted
  'neutral-200-l': '86%', // Border, Input
  'neutral-300-l': '75%',
  'neutral-400-l': '60%',
  'neutral-500-l': '50%',
  'neutral-600-l': '40%', // Muted foreground
  'neutral-700-l': '30%',
  'neutral-800-l': '20%',
  'neutral-900-l': '15%', // Ana foreground
  'neutral-950-l': '10%',

  'success-h': '120', 'success-s': '60%', 'success-l': '38%',
  'success-foreground-h': '120', 'success-foreground-s': '20%', 'success-foreground-l': '95%',
  'warning-h': '50', 'warning-s': '95%', 'warning-l': '52%',
  'warning-foreground-h': '50', 'warning-foreground-s': '60%', 'warning-foreground-l': '10%',
  'destructive-h': '350', 'destructive-s': '75%', 'destructive-l': '45%',
  'destructive-foreground-h': '350', 'destructive-foreground-s': '30%', 'destructive-foreground-l': '98%',
  'info-h': '200', 'info-s': '70%', 'info-l': '50%',
  'info-foreground-h': '200', 'info-foreground-s': '25%', 'info-foreground-l': '98%',
};

export const sunsetDarkHSLParts: RawThemeHSLParts = {
  'primary-h': '25', 'primary-s': '80%', 'primary-l': '60%',
  'primary-foreground-h': '25', 'primary-foreground-s': '20%', 'primary-foreground-l': '10%',
  'secondary-h': '45', 'secondary-s': '85%', 'secondary-l': '45%',
  'secondary-foreground-h': '45', 'secondary-foreground-s': '30%', 'secondary-foreground-l': '95%',
  'accent-h': '5', 'accent-s': '65%', 'accent-l': '55%',
  'accent-foreground-h': '5', 'accent-foreground-s': '20%', 'accent-foreground-l': '10%',

  'neutral-default-h': '30', 'neutral-default-s': '8%', // Koyu modda daha az doygun
  'neutral-0-l': '10%',   // Sayfa arkaplanı (koyu)
  'neutral-50-l': '14%',
  'neutral-100-l': '20%',  // Muted
  'neutral-200-l': '28%',  // Border, Input
  'neutral-300-l': '35%',
  'neutral-400-l': '45%',  // Muted foreground
  'neutral-500-l': '55%',
  'neutral-600-l': '65%',
  'neutral-700-l': '75%',
  'neutral-800-l': '88%',  // Ana foreground
  'neutral-900-l': '94%',
  'neutral-950-l': '98%',  // Card bg (açık)

  'success-h': '120', 'success-s': '50%', 'success-l': '50%',
  'success-foreground-h': '120', 'success-foreground-s': '15%', 'success-foreground-l': '10%',
  'warning-h': '50', 'warning-s': '90%', 'warning-l': '60%',
  'warning-foreground-h': '50', 'warning-foreground-s': '40%', 'warning-foreground-l': '10%',
  'destructive-h': '350', 'destructive-s': '70%', 'destructive-l': '55%',
  'destructive-foreground-h': '350', 'destructive-foreground-s': '20%', 'destructive-foreground-l': '98%',
  'info-h': '200', 'info-s': '60%', 'info-l': '60%',
  'info-foreground-h': '200', 'info-foreground-s': '15%', 'info-foreground-l': '10%',
};