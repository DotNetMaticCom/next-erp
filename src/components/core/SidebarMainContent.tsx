'use client';

import React from "react";
import SidebarSection from "./SidebarSection";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Settings, ChevronLeft } from "lucide-react";
import type { SidebarSection as SidebarSectionType } from "@/data/sidebarData";
import type { SectionNames } from "@/hooks/useSidebarState";

interface SidebarMainContentProps {
  activeIconTitle: string;
  currentSections: SidebarSectionType[];
  sectionStates: Record<SectionNames, boolean>;
  toggleSectionState: (sectionKey: SectionNames) => void;
  onCollapseSidebar?: () => void;
}

const SidebarMainContent: React.FC<SidebarMainContentProps> = ({
  activeIconTitle,
  currentSections,
  sectionStates,
  toggleSectionState,
  onCollapseSidebar,
}) => {
  return (
    <div className="flex flex-col h-full w-64 border-r border-border bg-card shadow-md transition-all duration-300 ease-in-out">
      <div className="flex h-[65px] items-center justify-between border-b border-border px-4 py-3 shrink-0">
        <h2 className="text-lg font-semibold text-foreground truncate">
          {activeIconTitle}
        </h2>
        {onCollapseSidebar && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onCollapseSidebar}
            className="text-muted-foreground hover:text-foreground h-8 w-8"
            aria-label="Kenar çubuğunu daralt"
          >
            <ChevronLeft size={20} />
          </Button>
        )}
      </div>
      <ScrollArea className="flex-grow px-2 py-2">
        <nav className="flex flex-col gap-1">
          {currentSections.map((section, index) => (
            <SidebarSection
              key={section.sectionKey}
              title={section.title}
              items={section.items}
              isOpen={sectionStates[section.sectionKey] === undefined ? true : !!sectionStates[section.sectionKey]}
              onToggle={() => toggleSectionState(section.sectionKey)}
              isLastSection={index === currentSections.length - 1}
            />
          ))}
        </nav>
      </ScrollArea>
      <div className="mt-auto border-t border-border p-3 shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
            SÖ
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">Serkan Özdoğan</p>
            <p className="text-xs text-muted-foreground truncate">Konya Pancar A.Ş.</p>
          </div>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground h-8 w-8" aria-label="Ayarlar">
            <Settings size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SidebarMainContent;