// src/components/ui/sonner.tsx
'use client';

// import { useTheme as useNextTheme } from "next-themes"; // BU SATIRI SİLİN
import { useTheme } from "@/themes/ThemeProvider"; // KENDİ useTheme HOOK'UNUZU KULLANIN
import { Toaster as SonnerPrimitive, toast as sonnerToastFn } from "sonner";

type ToasterProps = React.ComponentProps<typeof SonnerPrimitive>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { currentThemeConfig } = useTheme(); // Kendi hook'umuzdan tema bilgisini alalım

  return (
    <SonnerPrimitive
      theme={currentThemeConfig.isDark ? "dark" : "light"} // Kendi tema durumumuza göre
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, sonnerToastFn as toast };