// src/themes/sunset-theme/index.ts
import type { AppThemeConfig } from '../theme-types';
import { sunsetLightHSLParts, sunsetDarkHSLParts } from './sunset-hsl-parts';
import { defaultLightHSLParts, defaultDarkHSLParts } from '../default-theme/default-hsl-parts';

export const sunsetLightTheme: AppThemeConfig = {
  name: 'sunset-light',
  displayName: 'Gün Batımı (Açık)',
  isDark: false,
  coreHSLParts: { ...defaultLightHSLParts, ...sunsetLightHSLParts },
};

export const sunsetDarkTheme: AppThemeConfig = {
  name: 'sunset-dark',
  displayName: 'Gün Batımı (Koyu)',
  isDark: true,
  coreHSLParts: {
    ...defaultDarkHSLParts,
    ...sunsetLightHSLParts,
    ...sunsetDarkHSLParts
  },
};