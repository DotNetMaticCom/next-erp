// src/components/core/Sidebar.tsx
'use client';

import React, { useState, useEffect, useCallback } from "react";
import SidebarIcons from "./SidebarIcons";
import SidebarMainContent from "./SidebarMainContent";
import { sidebarIconsList, sidebarContentConfig } from "@/data/sidebarData";
import { useSidebarState } from "@/hooks/useSidebarState";
import { AnimatePresence, motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

interface SidebarProps {
  isMainContentVisible: boolean;
  toggleMainContent: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  isMainContentVisible,
  toggleMainContent,
}) => {
  const [activeIconIndex, setActiveIconIndex] = useState(0);
  const { sectionStates, toggleSection } = useSidebarState();
  const isMobile = useIsMobile();

  const activeIconTitle = sidebarIconsList[activeIconIndex]?.title || "Kategori";
  const currentDisplaySections = sidebarContentConfig[activeIconTitle] || [];

  const handleIconSelect = useCallback((index: number) => {
    setActiveIconIndex(index);
    if (isMobile && !isMainContentVisible) {
      toggleMainContent();
    } else if (!isMobile && !isMainContentVisible) {
      toggleMainContent();
    }
  }, [isMobile, isMainContentVisible, toggleMainContent]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.altKey && e.key.toLowerCase() === 's') || (e.metaKey && e.key.toLowerCase() === 'b')) {
        e.preventDefault();
        toggleMainContent();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggleMainContent]);

  return (
    <div className="flex h-full bg-card text-foreground">
      <SidebarIcons
        icons={sidebarIconsList}
        activeIconIndex={activeIconIndex}
        onIconSelect={handleIconSelect}
        onLogoClick={() => {}}
      />
      <AnimatePresence mode="wait">
        {isMainContentVisible && (
          <motion.div
            key="sidebar-main-content-animation"
            initial={{ width: 0, opacity: 0, x: -50 }}
            animate={{ width: 256, opacity: 1, x: 0 }}
            exit={{ width: 0, opacity: 0, x: -50, transition: { duration: 0.2 } }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden bg-card"
          >
            <SidebarMainContent
              activeIconTitle={activeIconTitle}
              currentSections={currentDisplaySections}
              sectionStates={sectionStates}
              toggleSectionState={toggleSection}
              onCollapseSidebar={isMobile ? undefined : toggleMainContent}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Sidebar;