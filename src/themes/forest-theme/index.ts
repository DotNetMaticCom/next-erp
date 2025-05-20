// src/themes/forest-theme/index.ts

import type { AppThemeConfig } from "../theme-types";
import { defaultLightHSLParts, defaultDarkHSLParts } from "../default-theme/default-hsl-parts";
import { forestLightHSLParts, forestDarkHSLParts } from "./forest-hsl-parts";

export const forestLightTheme: AppThemeConfig = {
  name: "forest-light",
  displayName: "Orman (Açık)",
  isDark: false,
  coreHSLParts: {
    ...defaultLightHSLParts,  // Tüm varsayılan açık değerleri
    ...forestLightHSLParts,   // Forest açık override
  },
};

export const forestDarkTheme: AppThemeConfig = {
  name: "forest-dark",
  displayName: "Orman (Koyu)",
  isDark: true,
  coreHSLParts: {
    ...defaultDarkHSLParts,   // Tüm varsayılan koyu değerleri
    ...forestLightHSLParts,   // Gerekirse, forest açık renkleri baz alıp,
    ...forestDarkHSLParts,    // Ardından koyu override
  },
};
