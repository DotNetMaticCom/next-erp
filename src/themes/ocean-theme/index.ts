// src/themes/ocean-theme/index.ts
import type { AppThemeConfig } from '../theme-types';
import { oceanLightHSLParts, oceanDarkHSLParts } from './ocean-hsl-parts';
import { defaultLightHSLParts, defaultDarkHSLParts } from '../default-theme/default-hsl-parts';

export const oceanLightTheme: AppThemeConfig = {
  name: 'ocean-light',
  displayName: 'Okyanus (Açık)',
  isDark: false,
  coreHSLParts: { ...defaultLightHSLParts, ...oceanLightHSLParts }, // Eksik HSL'ler default'tan gelir
};

export const oceanDarkTheme: AppThemeConfig = {
  name: 'ocean-dark',
  displayName: 'Okyanus (Koyu)',
  isDark: true,
  coreHSLParts: {
    ...defaultDarkHSLParts, // Önce genel koyu varsayılanları
    ...oceanLightHSLParts, // Sonra okyanusun açık renklerini (baz olarak)
    ...oceanDarkHSLParts,  // Ve son olarak okyanusun koyu mod override'ları
   },
};