// src/hooks/use-mobile.ts
'use client';

import { useState, useEffect } from "react";

const MOBILE_BREAKPOINT_MAX_WIDTH = 767; // Tailwind'in `md` breakpoint'i 768px'den başlar

export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(false); // Başlangıçta false

  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkDevice = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT_MAX_WIDTH);
    };

    checkDevice(); // İlk yüklemede kontrol et
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return isMobile;
}