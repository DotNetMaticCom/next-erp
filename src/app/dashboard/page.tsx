'use client';

import React from "react";
import DashboardContent from "@/components/core/DashboardContent";
import { Alert } from "@/components/ui/alert";
import ThemeCustomizationPanel from "@/components/theme/ThemeCustomizationPanel";
import { Button } from "@/components/ui/button";
import { toast as sonnerToast } from "@/components/ui/sonner";
import { useToast as useShadcnToast } from "@/hooks/use-toast";

export default function DashboardHomePage() {
  const { toast: shadcnToast } = useShadcnToast();

  return (
    <DashboardContent>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Gösterge Paneli
          </h1>
          <Alert
            type="info"
            title="Bilgilendirme"
            message="Next.js ve Tailwind CSS ile yeniden yapılandırılmış ERP arayüzüne hoş geldiniz."
          />
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Örnek Butonlar ve Toast Bildirimleri</h2>
            <div className="flex flex-wrap gap-2">
              <Button onClick={() => sonnerToast.success("Sonner: Başarılı bildirim!")}>
                Sonner Başarı
              </Button>
              <Button variant="destructive" onClick={() => sonnerToast.error("Sonner: Hata bildirimi!")}>
                Sonner Hata
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  shadcnToast({
                    title: "Shadcn: Zamanlanmış Etkinlik",
                    description: "Cuma, 23 Şubat saat 10:00'da.",
                    action: (
                      <Button variant="ghost" size="sm">Geri Al</Button>
                    ),
                  });
                }}
              >
                Shadcn Toast
              </Button>
            </div>
          </div>
          <Alert
            type="success"
            title="Başarılı!"
            message="Tüm bileşenler başarıyla yüklendi ve tema sistemi aktif."
          />
          <Alert
            type="warning"
            title="Uyarı"
            message="Lütfen tüm tema ayarlarını ve responsive davranışları test edin."
          />
          <Alert
            type="error"
            title="Hata Örneği!"
            message="Bu bir hata mesajı örneğidir. Gerekirse stilini kontrol edin."
          />
        </div>
        <aside className="lg:col-span-1 space-y-6">
          <ThemeCustomizationPanel />
        </aside>
      </div>
    </DashboardContent>
  );
}