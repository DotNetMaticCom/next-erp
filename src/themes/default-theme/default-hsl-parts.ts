// src/themes/default-theme/default-hsl-parts.ts
import type { RawThemeHSLParts } from '../theme-types';

// Shadcn UI'ın varsayılan açık tema renklerine yakın HSL parçaları
export const defaultLightHSLParts: RawThemeHSLParts = {
  'primary-h': '222', 'primary-s': '47%', 'primary-l': '11%',
  'primary-foreground-h': '0', 'primary-foreground-s': '0%', 'primary-foreground-l': '98%',
  'secondary-h': '210', 'secondary-s': '40%', 'secondary-l': '96.1%',
  'secondary-foreground-h': '222.2', 'secondary-foreground-s': '47.4%', 'secondary-foreground-l': '11.2%',
  'accent-h': '210', 'accent-s': '40%', 'accent-l': '48%', // Veya daha canlı bir vurgu
  'accent-foreground-h': '0', 'accent-foreground-s': '0%', 'accent-foreground-l': '98%',
  'neutral-default-h': '215', 'neutral-default-s': '15%', // Hafif mavimsi gri
  'neutral-0-l': '100%', 'neutral-50-l': '98.0%', 'neutral-100-l': '96.1%',
  'neutral-200-l': '93.0%', 'neutral-300-l': '85.1%', 'neutral-400-l': '70.0%',
  'neutral-500-l': '55.0%', 'neutral-600-l': '45.1%', 'neutral-700-l': '35.0%',
  'neutral-800-l': '20.0%', 'neutral-900-l': '10.0%', 'neutral-950-l': '5.0%',
  'success-h': '142.1', 'success-s': '70.6%', 'success-l': '45.3%',
  'success-foreground-h': '0', 'success-foreground-s': '0%', 'success-foreground-l': '98%',
  'warning-h': '44.8', 'warning-s': '99.1%', 'warning-l': '52.9%',
  'warning-foreground-h': '30', 'warning-foreground-s': '80%', 'warning-foreground-l': '15%',
  'destructive-h': '0', 'destructive-s': '84.2%', 'destructive-l': '60.2%',
  'destructive-foreground-h': '0', 'destructive-foreground-s': '0%', 'destructive-foreground-l': '98%',
  'info-h': '200', 'info-s': '90%', 'info-l': '50%',
  'info-foreground-h': '0', 'info-foreground-s': '0%', 'info-foreground-l': '98%',
};

// Shadcn UI'ın varsayılan koyu tema renklerine yakın HSL parçaları
export const defaultDarkHSLParts: RawThemeHSLParts = {
  'primary-h': '0', 'primary-s': '0%', 'primary-l': '98%', // Beyaz gibi
  'primary-foreground-h': '222', 'primary-foreground-s': '47%', 'primary-foreground-l': '11%', // Koyu mavi/siyah gibi
  'secondary-h': '215', 'secondary-s': '27.9%', 'secondary-l': '16.9%', // Koyu gri/mavi
  'secondary-foreground-h': '0', 'secondary-foreground-s': '0%', 'secondary-foreground-l': '98%', // Beyaz gibi
  'accent-h': '215', 'accent-s': '27.9%', 'accent-l': '16.9%', // secondary ile aynı olabilir veya farklı bir vurgu
  'accent-foreground-h': '0', 'accent-foreground-s': '0%', 'accent-foreground-l': '98%', // Beyaz gibi
  'neutral-default-h': '215', 'neutral-default-s': '15%', // Koyu temada da hafif mavimsi gri
  'neutral-0-l': '5.0%', 'neutral-50-l': '10.0%', 'neutral-100-l': '15.0%',
  'neutral-200-l': '20.0%', 'neutral-300-l': '25.0%', 'neutral-400-l': '35.0%',
  'neutral-500-l': '45.1%', 'neutral-600-l': '55.0%', 'neutral-700-l': '70.0%',
  'neutral-800-l': '85.1%', 'neutral-900-l': '93.0%', 'neutral-950-l': '98.0%', // Koyu tema sayfa arkaplanı için
  'success-h': '142.1', 'success-s': '70.6%', 'success-l': '55.3%', // Koyu temada biraz daha parlak olabilir
  'success-foreground-h': '142.1', 'success-foreground-s': '80.6%', 'success-foreground-l': '15.3%',
  'warning-h': '44.8', 'warning-s': '99.1%', 'warning-l': '62.9%',
  'warning-foreground-h': '30', 'warning-foreground-s': '80%', 'warning-foreground-l': '15%',
  'destructive-h': '0', 'destructive-s': '72.2%', 'destructive-l': '50.6%',
  'destructive-foreground-h': '0', 'destructive-foreground-s': '0%', 'destructive-foreground-l': '98%',
  'info-h': '200', 'info-s': '90%', 'info-l': '60%',
  'info-foreground-h': '0', 'info-foreground-s': '0%', 'info-foreground-l': '98%',
};