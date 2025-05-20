// src/components/core/SidebarSection.tsx
'use client';

import React from "react"; // Bu satır önemli
import NavItem from "./NavItem";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import type { SidebarSectionItem as SectionItemType } from "@/data/sidebarData";

interface SidebarSectionProps {
  title: string;
  items: SectionItemType[];
  isOpen: boolean;
  onToggle: () => void;
  isLastSection?: boolean;
}

const SidebarSection: React.FC<SidebarSectionProps> = ({
  title,
  items,
  isOpen,
  onToggle,
  isLastSection,
}) => {
  return ( // Bu parantez önemli
    <div className={cn(!isLastSection && "mb-1")}>
      <button
        type="button"
        className="flex items-center justify-between w-full cursor-pointer group px-4 py-3 hover:bg-muted/50 rounded-md transition-colors"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`section-${title.replace(/\s+/g, '-').toLowerCase()}`}
      >
        <span className="text-xs font-semibold uppercase text-muted-foreground group-hover:text-foreground">
          {title}
        </span>
        <div
          className={cn(
            "flex items-center justify-center w-5 h-5 rounded-sm transition-colors",
            "text-muted-foreground group-hover:text-accent-foreground group-hover:bg-accent/10"
          )}
        >
          {isOpen ? (
            <Minus size={16} strokeWidth={2.5} />
          ) : (
            <Plus size={16} strokeWidth={2.5} />
          )}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`section-${title.replace(/\s+/g, '-').toLowerCase()}`}
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto", marginTop: "4px" },
              collapsed: { opacity: 0, height: 0, marginTop: "0px" },
            }}
            transition={{ duration: 0.25, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden pl-3 pr-2"
          >
            <div className="space-y-1 py-1">
              {items.map((item, index) => (
                <NavItem
                  key={item.href || item.text || index}
                  href={item.href || "#"}
                  icon={item.icon}
                  text={item.text}
                  badge={item.badge}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {!isLastSection && (
        <div className="my-2 h-px bg-border mx-4"></div>
      )}
    </div>
  ); // Bu parantez önemli
};

export default SidebarSection;