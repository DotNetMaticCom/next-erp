// src/app/(dashboard)/layout.tsx
'use client';

import React, { useState, useEffect } from "react";
import Sidebar from "@/components/core/Sidebar"; // Çekirdek bileşenler için yeni yol
import Navbar from "@/components/core/Navbar";
import { usePathname } from 'next/navigation';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [isSidebarMainVisible, setIsSidebarMainVisible] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const checkIsMobile = () => {
      if (window.innerWidth < 768) { // md breakpoint (Tailwind)
        setIsSidebarMainVisible(false);
      } else {
        setIsSidebarMainVisible(true);
      }
    };
    checkIsMobile(); // İlk yüklemede kontrol et
    window.addEventListener('resize', checkIsMobile);
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const toggleSidebarMain = () => {
    setIsSidebarMainVisible(prev => !prev);
  };

  // Basit bir başlık oluşturma (sayfa bazlı metadata daha iyi bir çözüm olabilir)
  const pageTitle = pathname.split('/').filter(Boolean).pop() || "Gösterge Paneli";
  const capitalizedTitle = pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1).replace(/-/g, ' ');

  return (
    <div className="flex bg-background min-h-screen">
      {/* Sidebar: z-index ile Navbar'ın üzerinde kalmasını engellemek için ayarlanabilir */}
      <div className="sticky top-0 self-start h-screen z-30"> {/* Sidebar için z-index */}
        <Sidebar
          isMainContentVisible={isSidebarMainVisible}
          toggleMainContent={toggleSidebarMain}
        />
      </div>

      {/* İçerik Alanı */}
      <div className="flex-1 flex flex-col min-h-screen overflow-x-hidden">
        {/* Navbar: sticky ve z-index ile sabit kalır */}
        <Navbar
          // Navbar props'ları referans projenizdeki Navbar'a göre ayarlanmalı
          // title={capitalizedTitle} // Eğer Navbar title prop'u alıyorsa
          // showTitle={true}
          onToggleSidebar={toggleSidebarMain}
          isSidebarOpen={isSidebarMainVisible}
          className="sticky top-0 z-20" // Navbar için z-index
        />
        <main className="flex-1 p-4 md:p-6"> {/* İçeriğe padding ekleyelim */}
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;