// src/data/sidebarData.tsx
import React from "react";
import {
  LayoutDashboard,
  Home,
  Layers,
  Settings,
  User,
  BarChart2,
  Search,
  FileText,
  Command,
  Target,
  PanelLeft,
  // Referans projede olmayan ama kullanılabilecek diğer ikonlar:
  // PieChart, Users, File, Download, Settings2 (Gear), Sun, Moon, ChevronLeft, ChevronRight, Plus, Minus
} from "lucide-react";
import type { SectionNames } from "@/hooks/useSidebarState"; // Hook'tan SectionNames tipini import et

export interface SidebarIconItem {
  icon: React.ReactNode;
  title: string;
  // İsteğe bağlı: Bu ikona tıklandığında hangi sidebar bölümlerinin açılacağını/kapanacağını belirleyebiliriz.
  // sectionsToToggle?: SectionNames[]; // Veya direkt index
}

export interface SidebarSectionItem {
  icon: React.ReactNode;
  text: string;
  href?: string; // Navigasyon için
  active?: boolean; // Aktif linki belirlemek için (isteğe bağlı, pathname ile yapılabilir)
  badge?: number | string; // String de olabilir (örn: "Yeni")
  // İsteğe bağlı: Alt menü öğeleri
  // subItems?: SidebarSectionItem[];
}

export interface SidebarSection {
  // SectionNames tipinden bir anahtar. Bu, useSidebarState ile eşleşmeli.
  // Örneğin, sectionKey: 'campaigns', title: 'Campaigns'
  sectionKey: SectionNames;
  title: string; // UI'da görünecek başlık
  items: SidebarSectionItem[];
  // isOpen: boolean; // Bu artık useSidebarState hook'u tarafından yönetilecek
}

// Sidebar'ın solundaki ikonlar
export const sidebarIconsList: SidebarIconItem[] = [
  { icon: <Layers size={20} />, title: "Gösterge Paneli" }, // Dashboard ile ilgili
  { icon: <Home size={20} />, title: "Ana Sayfa" },       // Home ile ilgili
  { icon: <Command size={20} />, title: "Pazarlama" },    // Marketing ile ilgili
  { icon: <Settings size={20} />, title: "Ayarlar" },    // Settings ile ilgili
  // Diğer ana kategoriler eklenebilir
];

// Her bir ana ikon kategorisi için sidebar bölümleri
// sectionKey, useSidebarState'deki SectionNames ile eşleşmeli
export const sidebarContentConfig: Record<string, SidebarSection[]> = {
  "Gösterge Paneli": [ // sidebarIconsList[0].title ile eşleşebilir
    {
      sectionKey: "campaigns", title: "Kampanyalar", items: [
        { icon: <LayoutDashboard size={16} />, text: "Genel Bakış", href: "/dashboard/overview" },
        { icon: <BarChart2 size={16} />, text: "Öneriler", href: "/dashboard/recommendations" },
        { icon: <Target size={16} />, text: "Analizler", badge: 10, href: "/dashboard/insights" },
      ]
    },
    {
      sectionKey: "adGroups", title: "Reklam Grupları", items: [
        { icon: <Layers size={16} />, text: "Tüm Gruplar", href: "/dashboard/ad-groups" },
        { icon: <FileText size={16} />, text: "Raporlar", href: "/dashboard/ad-groups/reports" },
      ]
    },
    {
      sectionKey: "audiences", title: "Kitleler", items: [
        { icon: <User size={16} />, text: "Segmentler", href: "/dashboard/audiences" },
      ]
    },
  ],
  "Ana Sayfa": [
    {
      sectionKey: "home", title: "Ev", items: [
        { icon: <Home size={16} />, text: "Anasayfa", href: "/" },
        { icon: <PanelLeft size={16} />, text: "Son Aktiviteler", href: "/recent" },
      ]
    },
    {
      sectionKey: "productCatalog", title: "Ürünler", items: [
        { icon: <Layers size={16} />, text: "Katalog", href: "/products" },
      ]
    }
  ],
  "Pazarlama": [
     {
      sectionKey: "marketingCampaigns", title: "Pazarlama Kampanyaları", items: [
        { icon: <Target size={16} />, text: "Aktif Kampanyalar", href: "/marketing/active" },
      ]
    }
  ],
  "Ayarlar": [
    {
      sectionKey: "account", title: "Hesap", items: [
        { icon: <User size={16} />, text: "Profil", href: "/settings/profile" },
        { icon: <Settings size={16} />, text: "Genel Ayarlar", href: "/settings/general" },
      ]
    },
    {
      sectionKey: "system", title: "Sistem", items: [
        { icon: <Command size={16} />, text: "Sistem Bilgisi", href: "/settings/system-info" },
      ]
    }
  ],
  // Diğer ikon başlıkları için içerikler...
};