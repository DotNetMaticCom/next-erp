// src/themes/ThemeProvider.tsx
'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useRef,
  ReactNode,
} from 'react';
import type { AppThemeConfig, RawThemeHSLParts } from './theme-types';
import {
  getAppThemeConfig,
  allAppThemes,
  saveThemePreference, // globalSaveThemePreference yerine doğrudan bu
  loadThemePreference, // globalLoadThemePreference yerine doğrudan bu
  isSystemDarkMode,
  watchSystemTheme,
} from './index';

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: string;
  storageKey?: string;
  respectSystemPreference?: boolean;
}

interface ThemeContextType {
  currentThemeConfig: AppThemeConfig;
  setTheme: (themeName: string) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  themes: AppThemeConfig[];
  isThemeLoaded: boolean;
}

const PROVIDER_DEFAULT_THEME_NAME = 'default-light';
let providerInitialDefaultConfig = getAppThemeConfig(PROVIDER_DEFAULT_THEME_NAME);
if (!providerInitialDefaultConfig && allAppThemes.length > 0) {
  providerInitialDefaultConfig = allAppThemes.find(t => !t.isDark) || allAppThemes[0];
} else if (!providerInitialDefaultConfig) {
  providerInitialDefaultConfig = {
    name: 'fallback-light',
    displayName: 'Fallback Light',
    isDark: false,
    coreHSLParts: {
      'primary-h': '0', 'primary-s': '0%', 'primary-l': '0%',
      'primary-foreground-h': '0', 'primary-foreground-s': '0%', 'primary-foreground-l': '100%',
      'secondary-h': '0', 'secondary-s': '0%', 'secondary-l': '90%',
      'secondary-foreground-h': '0', 'secondary-foreground-s': '0%', 'secondary-foreground-l': '0%',
      'accent-h': '0', 'accent-s': '0%', 'accent-l': '50%',
      'accent-foreground-h': '0', 'accent-foreground-s': '0%', 'accent-foreground-l': '0%',
      'neutral-default-h': '0', 'neutral-default-s': '0%',
      'neutral-0-l': '100%', 'neutral-50-l': '95%', 'neutral-100-l': '90%',
      'neutral-200-l': '85%', 'neutral-300-l': '80%', 'neutral-400-l': '70%',
      'neutral-500-l': '60%', 'neutral-600-l': '50%', 'neutral-700-l': '40%',
      'neutral-800-l': '30%', 'neutral-900-l': '20%', 'neutral-950-l': '10%',
      'success-h': '120', 'success-s': '100%', 'success-l': '25%',
      'success-foreground-h': '0', 'success-foreground-s': '0%', 'success-foreground-l': '100%',
      'warning-h': '60', 'warning-s': '100%', 'warning-l': '50%',
      'warning-foreground-h': '0', 'warning-foreground-s': '0%', 'warning-foreground-l': '0%',
      'destructive-h': '0', 'destructive-s': '100%', 'destructive-l': '50%',
      'destructive-foreground-h': '0', 'destructive-foreground-s': '0%', 'destructive-foreground-l': '100%',
      'info-h': '200', 'info-s': '100%', 'info-l': '50%',
      'info-foreground-h': '0', 'info-foreground-s': '0%', 'info-foreground-l': '100%',
    }
  };
}

const ThemeContext = createContext<ThemeContextType>({
  currentThemeConfig: providerInitialDefaultConfig!,
  setTheme: () => {},
  isDarkMode: providerInitialDefaultConfig!.isDark,
  toggleDarkMode: () => {},
  themes: allAppThemes,
  isThemeLoaded: false,
});

function applyCoreHSLPartsToDOM(hslParts: RawThemeHSLParts) {
  if (typeof document === 'undefined') return;
  const rootStyle = document.documentElement.style;
  Object.entries(hslParts).forEach(([key, value]) => {
    if (value !== undefined) {
      rootStyle.setProperty(`--tema-${key}`, String(value));
    }
  });
}

export const NewThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme: propDefaultThemeName = PROVIDER_DEFAULT_THEME_NAME,
  storageKey = 'next-erp-theme-preference',
  respectSystemPreference = true,
}) => {
  const [currentThemeConfig, setCurrentThemeConfigInternal] = useState<AppThemeConfig>(
    () => getAppThemeConfig(propDefaultThemeName) || providerInitialDefaultConfig!
  );
  const [isThemeLoaded, setIsThemeLoaded] = useState(false);
  const activeThemeClassRef = useRef<string | null>(null);

  const applyThemeStyles = useCallback(
    (newConfig: AppThemeConfig) => {
      if (typeof document === 'undefined' || !newConfig) return;

      const newThemeClassName = `theme-${newConfig.name}`;
      const root = document.documentElement;

      if (activeThemeClassRef.current && activeThemeClassRef.current !== newThemeClassName) {
        root.classList.remove(activeThemeClassRef.current);
      }
      allAppThemes.forEach(theme => {
         if (`theme-${theme.name}` !== newThemeClassName) {
           root.classList.remove(`theme-${theme.name}`);
         }
      });

      root.classList.add(newThemeClassName);
      activeThemeClassRef.current = newThemeClassName;
      root.classList.toggle('dark', newConfig.isDark);
      applyCoreHSLPartsToDOM(newConfig.coreHSLParts);
      setCurrentThemeConfigInternal(newConfig);
    },
    []
  );

  useEffect(() => {
    let initialConfigToLoad: AppThemeConfig | undefined;
    const savedThemeName = loadThemePreference(storageKey); // Doğrudan import edilen fonksiyonu kullan

    if (savedThemeName) {
      initialConfigToLoad = getAppThemeConfig(savedThemeName);
    } else if (respectSystemPreference) {
      const systemIsDark = isSystemDarkMode();
      const baseName = propDefaultThemeName.replace(/-light|-dark$/, '');
      const systemSpecificName = systemIsDark ? `${baseName}-dark` : `${baseName}-light`;
      initialConfigToLoad = getAppThemeConfig(systemSpecificName);
      if (!initialConfigToLoad) {
        initialConfigToLoad = systemIsDark
          ? allAppThemes.find(t => t.isDark)
          : allAppThemes.find(t => !t.isDark);
      }
    }
    const finalInitialConfig = initialConfigToLoad || getAppThemeConfig(propDefaultThemeName) || providerInitialDefaultConfig!;

    applyThemeStyles(finalInitialConfig);
    saveThemePreference(finalInitialConfig.name, storageKey); // Doğrudan import edilen fonksiyonu kullan
    setIsThemeLoaded(true);

    const unwatchSystem = respectSystemPreference ? watchSystemTheme((isDark) => {
      if (!loadThemePreference(storageKey)) {
        const currentInternalConf = currentThemeConfig;
        const currentBase = (currentInternalConf.name || propDefaultThemeName).replace(/-dark|-light$/, "");
        const newSystemThemeName = isDark ? `${currentBase}-dark` : `${currentBase}-light`;
        let newSystemConf = getAppThemeConfig(newSystemThemeName);
        if (!newSystemConf) {
           newSystemConf = isDark
              ? allAppThemes.find(t => t.isDark && t.name.startsWith(currentBase)) || allAppThemes.find(t => t.isDark)
              : allAppThemes.find(t => !t.isDark && t.name.startsWith(currentBase)) || allAppThemes.find(t => !t.isDark);
        }
        if (newSystemConf) {
          applyThemeStyles(newSystemConf);
          saveThemePreference(newSystemConf.name, storageKey); // Doğrudan import edilen fonksiyonu kullan
        }
      }
    }) : null;

    return () => {
      if (unwatchSystem) unwatchSystem();
    };
  }, [propDefaultThemeName, storageKey, respectSystemPreference, applyThemeStyles, currentThemeConfig.name]);


  const setThemeByName = useCallback(
    (themeName: string) => {
      const newConfig = getAppThemeConfig(themeName);
      if (newConfig) {
        applyThemeStyles(newConfig);
        saveThemePreference(newConfig.name, storageKey); // Doğrudan import edilen fonksiyonu kullan
      }
    },
    [applyThemeStyles, storageKey]
  );

  const toggleDarkMode = useCallback(() => {
    const currentBaseName = currentThemeConfig.name.replace(currentThemeConfig.isDark ? "-dark" : "-light", "");
    const targetThemeName = currentThemeConfig.isDark ? `${currentBaseName}-light` : `${currentBaseName}-dark`;
    let targetConfig = getAppThemeConfig(targetThemeName);

    if (!targetConfig) {
        targetConfig = allAppThemes.find(t => t.name.startsWith(currentBaseName) && t.isDark !== currentThemeConfig.isDark);
    }
    if (!targetConfig) {
        targetConfig = currentThemeConfig.isDark
            ? allAppThemes.find(t => !t.isDark)
            : allAppThemes.find(t => t.isDark);
    }
    const finalTargetConfig = targetConfig || providerInitialDefaultConfig!;
    applyThemeStyles(finalTargetConfig);
    saveThemePreference(finalTargetConfig.name, storageKey); // Doğrudan import edilen fonksiyonu kullan
  }, [currentThemeConfig, applyThemeStyles, storageKey]);

  return (
    <ThemeContext.Provider
      value={{
        currentThemeConfig,
        setTheme: setThemeByName,
        isDarkMode: currentThemeConfig.isDark,
        toggleDarkMode,
        themes: allAppThemes,
        isThemeLoaded,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a NewThemeProvider');
  }
  return context;
};