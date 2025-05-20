// src/themes/default-theme/index.ts
import type { AppThemeConfig } from '../theme-types';
import { defaultLightHSLParts, defaultDarkHSLParts } from './default-hsl-parts';

export const defaultLightThemeConfig: AppThemeConfig = {
  name: 'default-light',
  displayName: 'Default (Açık)',
  isDark: false,
  coreHSLParts: defaultLightHSLParts,
};

export const defaultDarkThemeConfig: AppThemeConfig = {
  name: 'default-dark',
  displayName: 'Default (Koyu)',
  isDark: true,
  // Koyu tema için, açık tema HSL parçalarını alıp üzerine koyu mod için olanları yazmak yerine,
  // doğrudan defaultDarkHSLParts kullanılır. Eğer bir tema sadece birkaç değeri değiştirecekse
  // o zaman birleştirme mantığı kullanılabilir.
  coreHSLParts: defaultDarkHSLParts,
};