// src/components/core/Navbar.tsx
'use client';

import React from "react";
import Link from "next/link";
import { Menu, ChevronDown, BellRing, Search, Sun, Moon, Settings as SettingsIcon, UserCircle2, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useTheme } from "@/themes/ThemeProvider";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { getAppThemeConfig, allAppThemes } from '@/themes';


interface NavbarProps {
  className?: string;
  onToggleSidebar?: () => void;
  isSidebarOpen?: boolean;
}
const providerInitialDefaultConfig = getAppThemeConfig('default-light') || allAppThemes[0];


const Navbar: React.FC<NavbarProps> = ({
  className,
  onToggleSidebar,
  isSidebarOpen,
}) => {
  const { isDarkMode, toggleDarkMode, currentThemeConfig, isThemeLoaded } = useTheme();

  return (
    <header
      className={cn(
        "flex h-[65px] items-center border-b border-border bg-card/80 px-4 backdrop-blur-md shrink-0 text-foreground",
        "sticky top-0 z-10",
        className
      )}
    >
      <div className="flex h-full w-full items-center justify-between">
        <div className="flex items-center">
          {onToggleSidebar && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onToggleSidebar}
              className="mr-2 h-9 w-9 text-muted-foreground hover:text-foreground"
              aria-label={isSidebarOpen ? "Kenar çubuğunu kapat" : "Kenar çubuğunu aç"}
            >
              <Menu size={22} />
            </Button>
          )}
        </div>
        <div className="flex items-center gap-3">
          <div className="relative hidden md:block">
            <Search
              className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <Input
              type="search"
              placeholder="Ara..."
              className="h-9 w-full rounded-md bg-background pl-8 pr-3 md:w-[200px] lg:w-[300px] focus-visible:ring-primary"
            />
          </div>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                className="h-9 w-9 text-muted-foreground hover:text-foreground"
                aria-label={isDarkMode ? "Açık moda geç" : "Koyu moda geç"}
              >
                <Sun size={20} className={cn("transition-all", isDarkMode ? "rotate-90 scale-0" : "rotate-0 scale-100")} />
                <Moon size={20} className={cn("absolute transition-all", isDarkMode ? "rotate-0 scale-100" : "-rotate-90 scale-0")} />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="bg-popover text-popover-foreground">
              <p suppressHydrationWarning>
                {isDarkMode ? "Açık Moda Geç" : "Koyu Moda Geç"} ({isThemeLoaded ? currentThemeConfig.displayName : providerInitialDefaultConfig.displayName})
              </p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="relative h-9 w-9 text-muted-foreground hover:text-foreground">
                <BellRing size={20} />
                <span className="absolute right-1.5 top-1.5 flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary"></span>
                </span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="bg-popover text-popover-foreground">
              <p>Bildirimler</p>
            </TooltipContent>
          </Tooltip>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="group flex items-center gap-2 rounded-full p-0.5 pr-2 hover:bg-muted"
              >
                <Avatar className="h-8 w-8 border-2 border-border group-hover:border-primary">
                  <AvatarImage
                    src="https://i.pravatar.cc/40?u=next-erp-user"
                    alt="Kullanıcı Profili"
                  />
                  <AvatarFallback>SÖ</AvatarFallback>
                </Avatar>
                <div className="hidden flex-col items-start text-left md:flex">
                  <span className="text-xs font-semibold uppercase text-muted-foreground">KONYA PANCAR</span>
                  <span className="text-sm font-medium text-foreground">Serkan Özdoğan</span>
                </div>
                <ChevronDown size={18} className="ml-1 text-muted-foreground transition-transform group-data-[state=open]:rotate-180" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 border-border shadow-dropdown">
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none text-foreground">Serkan Özdoğan</p>
                  <p className="text-xs leading-none text-muted-foreground">serkan.ozdogan@example.com</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/profile" className="flex items-center">
                    <UserCircle2 className="mr-2 h-4 w-4" />
                    <span>Profil</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                   <Link href="/dashboard/settings" className="flex items-center">
                    <SettingsIcon className="mr-2 h-4 w-4" />
                    <span>Ayarlar</span>
                   </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="flex items-center text-destructive hover:!bg-destructive/10 hover:!text-destructive"
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Çıkış Yap</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Navbar;