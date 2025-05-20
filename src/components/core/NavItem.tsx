// src/components/core/NavItem.tsx
'use client';

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavItemProps {
  href: string;
  icon: React.ReactNode; // İkonu doğrudan alalım
  text: string;
  badge?: number | string;
  onClick?: () => void; // İsteğe bağlı tıklama işleyicisi
  className?: string;
  exactMatch?: boolean; // Tam eşleşme mi, yoksa başlangıç eşleşmesi mi?
}

const NavItem: React.FC<NavItemProps> = ({
  href,
  icon,
  text,
  badge,
  onClick,
  className,
  exactMatch = false,
}) => {
  const pathname = usePathname();
  const isActive = exactMatch ? pathname === href : pathname.startsWith(href);

  const itemClasses = cn(
    "flex items-center w-full rounded-md text-sm font-medium transition-colors duration-150 ease-in-out group",
    "px-3 py-2.5", // Daha iyi bir padding
    isActive
      ? "bg-primary/10 text-primary"
      : "text-muted-foreground hover:bg-muted hover:text-primary",
    className
  );

  const iconClasses = cn(
    "mr-3 h-4 w-4 flex-shrink-0", // İkon boyutu sabit
    isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"
  );

  const badgeClasses = cn(
    "ml-auto text-xs rounded-full px-2 py-0.5 text-center min-w-[20px] font-medium",
    isActive
      ? "bg-primary text-primary-foreground" // Aktifken daha belirgin badge
      : "bg-muted-foreground/20 text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary"
  );

  const content = (
    <>
      {React.isValidElement(icon) ? React.cloneElement(icon as React.ReactElement, { className: iconClasses }) : null}
      <span className="flex-grow truncate">{text}</span>
      {badge !== undefined && (
        <div className={badgeClasses}>
          {badge}
        </div>
      )}
    </>
  );

  if (onClick && !href) { // Sadece onClick varsa button gibi davran
    return (
      <button
        type="button"
        className={itemClasses}
        onClick={onClick}
        aria-current={isActive ? "page" : undefined}
      >
        {content}
      </button>
    );
  }

  return (
    <Link
      href={href}
      className={itemClasses}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
    >
      {content}
    </Link>
  );
};

export default NavItem;