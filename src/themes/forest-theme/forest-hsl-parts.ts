// src/themes/forest-theme/forest-hsl-parts.ts
import type { RawThemeHSLParts } from '../theme-types';

export const forestLightHSLParts: RawThemeHSLParts = {
  'primary-h': '120', 'primary-s': '35%', 'primary-l': '30%',
  'primary-foreground-h': '90', 'primary-foreground-s': '50%', 'primary-foreground-l': '95%',
  'secondary-h': '90', 'secondary-s': '30%', 'secondary-l': '45%',
  'secondary-foreground-h': '90', 'secondary-foreground-s': '50%', 'secondary-foreground-l': '95%',
  'accent-h': '30', 'accent-s': '50%', 'accent-l': '45%',
  'accent-foreground-h': '30', 'accent-foreground-s': '20%', 'accent-foreground-l': '95%',

  'neutral-default-h': '100', 'neutral-default-s': '8%',
  'neutral-0-l': '98%',   // Arkaplanlar için çok açık yeşilimsi-bej
  'neutral-50-l': '95%',  // Sayfa arkaplanı
  'neutral-100-l': '92%', // Muted
  'neutral-200-l': '85%', // Border, Input
  'neutral-300-l': '78%',
  'neutral-400-l': '65%',
  'neutral-500-l': '55%',
  'neutral-600-l': '40%', // Muted foreground
  'neutral-700-l': '30%',
  'neutral-800-l': '22%',
  'neutral-900-l': '15%', // Ana foreground
  'neutral-950-l': '8%',

  'success-h': '140', 'success-s': '60%', 'success-l': '35%',
  'success-foreground-h': '140', 'success-foreground-s': '30%', 'success-foreground-l': '95%',
  'warning-h': '40', 'warning-s': '70%', 'warning-l': '48%',
  'warning-foreground-h': '40', 'warning-foreground-s': '100%', 'warning-foreground-l': '15%',
  'destructive-h': '0', 'destructive-s': '60%', 'destructive-l': '40%',
  'destructive-foreground-h': '0', 'destructive-foreground-s': '30%', 'destructive-foreground-l': '95%',
  'info-h': '190', 'info-s': '50%', 'info-l': '45%',
  'info-foreground-h': '190', 'info-foreground-s': '30%', 'info-foreground-l': '95%',
};

export const forestDarkHSLParts: RawThemeHSLParts = {
  'primary-h': '120', 'primary-s': '30%', 'primary-l': '65%',
  'primary-foreground-h': '120', 'primary-foreground-s': '15%', 'primary-foreground-l': '15%',
  'secondary-h': '90', 'secondary-s': '25%', 'secondary-l': '50%',
  'secondary-foreground-h': '90', 'secondary-foreground-s': '10%', 'secondary-foreground-l': '15%',
  'accent-h': '30', 'accent-s': '45%', 'accent-l': '60%',
  'accent-foreground-h': '30', 'accent-foreground-s': '15%', 'accent-foreground-l': '15%',

  'neutral-default-h': '100', 'neutral-default-s': '4%', // Koyu temada daha az doygun nötrler
  'neutral-0-l': '8%',    // Sayfa arkaplanı (çok koyu)
  'neutral-50-l': '12%',
  'neutral-100-l': '18%',  // Muted
  'neutral-200-l': '25%',  // Border, Input
  'neutral-300-l': '30%',
  'neutral-400-l': '40%',  // Muted foreground
  'neutral-500-l': '50%',
  'neutral-600-l': '60%',
  'neutral-700-l': '70%',
  'neutral-800-l': '85%',  // Ana foreground
  'neutral-900-l': '92%',
  'neutral-950-l': '97%',  // Card bg

  'success-h': '140', 'success-s': '50%', 'success-l': '55%',
  'success-foreground-h': '140', 'success-foreground-s': '20%', 'success-foreground-l': '10%',
  'warning-h': '40', 'warning-s': '65%', 'warning-l': '58%',
  'warning-foreground-h': '40', 'warning-foreground-s': '100%', 'warning-foreground-l': '10%',
  'destructive-h': '0', 'destructive-s': '55%', 'destructive-l': '50%',
  'destructive-foreground-h': '0', 'destructive-foreground-s': '0%', 'destructive-foreground-l': '95%',
  'info-h': '190', 'info-s': '45%', 'info-l': '55%',
  'info-foreground-h': '190', 'info-foreground-s': '15%', 'info-foreground-l': '10%',
};