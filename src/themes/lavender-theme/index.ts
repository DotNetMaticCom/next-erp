// src/themes/lavender-theme/index.ts
import type { AppThemeConfig } from '../theme-types';
import { lavenderLightHSLParts, lavenderDarkHSLParts } from './lavender-hsl-parts';
import { defaultLightHSLParts, defaultDarkHSLParts } from '../default-theme/default-hsl-parts';

export const lavenderLightTheme: AppThemeConfig = {
  name: 'lavender-light',
  displayName: 'Lavanta Sisi (Açık)',
  isDark: false,
  coreHSLParts: { ...defaultLightHSLParts, ...lavenderLightHSLParts },
};

export const lavenderDarkTheme: AppThemeConfig = {
  name: 'lavender-dark',
  displayName: 'Lavanta Sisi (Koyu)',
  isDark: true,
  coreHSLParts: {
    ...defaultDarkHSLParts,
    ...lavenderLightHSLParts,
    ...lavenderDarkHSLParts
  },
};