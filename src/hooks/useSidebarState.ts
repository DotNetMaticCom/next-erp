// src/hooks/useSidebarState.ts
'use client';

import { useState, useCallback } from 'react';

// Sidebar bölümlerinin adlarını tanımlayan bir tip.
// Bu, referans projenizdeki sidebarData.ts dosyasındaki bölüm başlıklarından türetilmelidir.
export type SectionNames =
  | 'campaigns' | 'adGroups' | 'audiences' // Dashboard
  | 'home' | 'recent'                     // Home
  | 'productCatalog' | 'management'       // Products
  | 'marketingCampaigns' | 'audience'     // Marketing (referansta 'Campaigns' ve 'Audience' vardı)
  | 'reports' | 'data'                    // Analytics
  | 'files' | 'shared'                    // Documents
  | 'dailyReports'                        // Reports (referansta 'Reports' vardı)
  | 'account' | 'system';                 // Settings

// Her bölümün açık/kapalı durumunu tutan bir tip.
type SidebarSectionsState = Record<SectionNames, boolean>;

interface UseSidebarStateResult {
  sectionStates: SidebarSectionsState;
  toggleSection: (sectionName: SectionNames) => void;
  expandAllSections: (sectionsToAffect?: SectionNames[]) => void;
  collapseAllSections: (sectionsToAffect?: SectionNames[]) => void;
  isSectionOpen: (sectionName: SectionNames) => boolean;
}

// Başlangıç durumları (sidebarData'dan gelen isOpen değerlerine göre ayarlanabilir)
const initialSectionStates: SidebarSectionsState = {
  campaigns: true, adGroups: true, audiences: false,
  home: true, recent: true,
  productCatalog: true, management: true,
  marketingCampaigns: true, audience: true, // referans projede 'Campaigns' -> 'marketingCampaigns'
  reports: true, data: true,
  files: true, shared: true,
  dailyReports: true, // referans projede 'Reports' -> 'dailyReports'
  account: true, system: true,
};

export const useSidebarState = (): UseSidebarStateResult => {
  const [sectionStates, setSectionStates] = useState<SidebarSectionsState>(initialSectionStates);

  const toggleSection = useCallback((sectionName: SectionNames) => {
    setSectionStates(prev => ({
      ...prev,
      [sectionName]: !prev[sectionName],
    }));
  }, []);

  const expandAllSections = useCallback((sectionsToAffect?: SectionNames[]) => {
    const keysToUpdate = sectionsToAffect || (Object.keys(sectionStates) as SectionNames[]);
    setSectionStates(prev => {
      const newState = { ...prev };
      keysToUpdate.forEach(key => { newState[key] = true; });
      return newState;
    });
  }, [sectionStates]); // sectionStates eklendi

  const collapseAllSections = useCallback((sectionsToAffect?: SectionNames[]) => {
    const keysToUpdate = sectionsToAffect || (Object.keys(sectionStates) as SectionNames[]);
    setSectionStates(prev => {
      const newState = { ...prev };
      keysToUpdate.forEach(key => { newState[key] = false; });
      return newState;
    });
  }, [sectionStates]); // sectionStates eklendi

  const isSectionOpen = useCallback(
    (sectionName: SectionNames) => !!sectionStates[sectionName],
    [sectionStates]
  );

  return { sectionStates, toggleSection, expandAllSections, collapseAllSections, isSectionOpen };
};