// src/components/dev/ThemeTestControls.tsx
'use client';

import React from 'react';
import { useTheme } from '@/themes/ThemeProvider';

export function ThemeTestControls() {
  const { setTheme, toggleDarkMode, currentThemeConfig, themes, isThemeLoaded } = useTheme();

  if (process.env.NODE_ENV !== 'development' || !isThemeLoaded) {
    return null;
  }

  const controlStyles: React.CSSProperties = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    padding: '15px',
    borderRadius: 'var(--radius-lg)',
    zIndex: 9999,
    boxShadow: 'var(--shadow-xl)',
    background: currentThemeConfig.isDark ? 'rgba(40, 42, 54, 0.95)' : 'rgba(248, 249, 250, 0.95)',
    color: currentThemeConfig.isDark ? 'hsl(var(--tema-neutral-200-l))' : 'hsl(var(--tema-neutral-800-l))',
    border: `1px solid hsl(var(--border))`,
  };

  const buttonStyle: React.CSSProperties = {
    marginRight: '10px',
    padding: '8px 12px',
    border: `1px solid hsl(var(--border))`,
    borderRadius: 'var(--radius-md)',
    cursor: 'pointer',
    background: `hsl(var(--secondary))`,
    color: `hsl(var(--secondary-foreground))`,
    fontSize: 'var(--text-sm)',
  };

  const selectStyle: React.CSSProperties = {
    padding: '8px',
    border: `1px solid hsl(var(--border))`,
    borderRadius: 'var(--radius-md)',
    background: `hsl(var(--input))`,
    color: `hsl(var(--foreground))`,
    fontSize: 'var(--text-sm)',
  };

  return (
    <div style={controlStyles}>
      <h4 style={{ marginTop: 0, marginBottom: '10px', fontSize: 'var(--text-lg)', fontWeight: 600 }}>Tema Kontrolleri</h4>
      <p style={{ margin: '5px 0', fontSize: 'var(--text-sm)' }}>
        Aktif: <strong>{currentThemeConfig.displayName}</strong> ({currentThemeConfig.isDark ? 'Koyu' : 'Açık'})
      </p>
      <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center' }}>
        <button onClick={toggleDarkMode} style={buttonStyle}>
          Mod Değiştir
        </button>
        <select
          value={currentThemeConfig.name}
          onChange={(e) => setTheme(e.target.value)}
          style={selectStyle}
          aria-label="Tema Seçimi"
        >
          {themes.map(theme => (
            <option key={theme.name} value={theme.name}>
              {theme.displayName}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}