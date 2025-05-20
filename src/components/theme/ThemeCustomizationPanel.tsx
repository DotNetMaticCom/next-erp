// src/components/theme/ThemeCustomizationPanel.tsx
'use client';

import React from 'react';
import { useTheme } from '@/themes/ThemeProvider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { getAppThemeConfig, allAppThemes } from '@/themes'; // providerInitialDefaultConfig için

const ThemeCustomizationPanel: React.FC = () => {
  const { isDarkMode, toggleDarkMode, currentThemeConfig, setTheme, themes, isThemeLoaded } = useTheme();
  const providerInitialDefaultConfig = getAppThemeConfig('default-light') || allAppThemes[0];


  return (
    <Card className="w-full max-w-md shadow-lg">
      <CardHeader>
        <CardTitle>Tema Ayarları</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label>Mevcut Tema</Label>
          <p className="text-sm text-muted-foreground" suppressHydrationWarning>
            <strong>{isThemeLoaded ? currentThemeConfig.displayName : providerInitialDefaultConfig.displayName}</strong>
            ({isThemeLoaded ? (currentThemeConfig.isDark ? 'Koyu Mod' : 'Açık Mod') : (providerInitialDefaultConfig.isDark ? 'Koyu Mod' : 'Açık Mod')})
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="theme-select">Tema Seçin</Label>
          <Select
            value={isThemeLoaded ? currentThemeConfig.name : providerInitialDefaultConfig.name}
            onValueChange={(value) => setTheme(value)}
            disabled={!isThemeLoaded}
          >
            <SelectTrigger id="theme-select" className="w-full">
              <SelectValue placeholder="Bir tema seçin" />
            </SelectTrigger>
            <SelectContent>
              {themes.map((theme) => (
                <SelectItem key={theme.name} value={theme.name}>
                  {theme.displayName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button onClick={toggleDarkMode} variant="outline" className="w-full" disabled={!isThemeLoaded}>
          {isThemeLoaded ? (isDarkMode ? 'Açık Moda Geç' : 'Koyu Moda Geç') : 'Mod Değiştir'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ThemeCustomizationPanel;