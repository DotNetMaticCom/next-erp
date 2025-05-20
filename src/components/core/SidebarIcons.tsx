'use client';

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import type { SidebarIconItem } from "@/data/sidebarData";
import { Settings, LogOut } from "lucide-react";

interface SidebarIconsProps {
  icons: SidebarIconItem[];
  activeIconIndex: number;
  onIconSelect: (index: number) => void;
  onLogoClick?: () => void;
}

const SidebarIcons: React.FC<SidebarIconsProps> = ({
  icons,
  activeIconIndex,
  onIconSelect,
  onLogoClick,
}) => {
  return (
    <TooltipProvider delayDuration={50}>
      <div className="flex h-full w-16 flex-col items-center border-r border-border bg-card shadow-sm">
        <div
          className="flex h-[65px] w-full shrink-0 cursor-pointer items-center justify-center border-b border-border"
          onClick={onLogoClick}
          title="Ana Sayfa"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-foreground p-1 transition-transform duration-200 hover:scale-105">
            <Image src="/pnk-logo.png" alt="PNK Logo" width={32} height={32} className="object-contain" />
          </div>
        </div>
        <nav className="flex flex-grow flex-col items-center space-y-2 p-2 pt-3">
          {icons.map((item, index) => (
            <Tooltip key={item.title + index}>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  onClick={() => onIconSelect(index)}
                  className={cn(
                    "sidebar-icon-button",
                    index === activeIconIndex && "active"
                  )}
                  aria-label={item.title}
                  aria-pressed={index === activeIconIndex}
                >
                  {React.isValidElement(item.icon) ? React.cloneElement(item.icon as React.ReactElement, { size: 20 }) : null}
                </button>
              </TooltipTrigger>
              <TooltipContent
                side="right"
                align="center"
                className="bg-popover text-popover-foreground shadow-md border border-border"
                sideOffset={8}
              >
                <p>{item.title}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </nav>
        <div className="mt-auto flex flex-col items-center space-y-2 p-2 pb-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                type="button"
                className="sidebar-icon-button"
                aria-label="Ayarlar"
              >
                <Settings size={20} />
              </button>
            </TooltipTrigger>
            <TooltipContent side="right" align="center" sideOffset={8} className="bg-popover text-popover-foreground shadow-md border border-border">
              <p>Ayarlar</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                type="button"
                className="sidebar-icon-button hover:!text-destructive hover:!bg-destructive/10"
                aria-label="Çıkış Yap"
              >
                <LogOut size={20} />
              </button>
            </TooltipTrigger>
            <TooltipContent side="right" align="center" sideOffset={8} className="bg-popover text-popover-foreground shadow-md border border-border">
              <p>Çıkış Yap</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default SidebarIcons;