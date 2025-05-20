// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans"; // Geist fontunu doğrudan import et
import { GeistMono } from "geist/font/mono"; // Geist Mono fontunu import et
import "./globals.css";
import Providers from "./providers"; // Oluşturduğumuz Providers bileşeni

// next/font yerine doğrudan geist/font/sans ve mono kullanılıyor.
// değişken atamaları CSS'de :root altında veya Tailwind config'de yapılabilir.
// Zaten globals.css içinde --font-geist-sans ve --font-geist-mono için placeholder var.

export const metadata: Metadata = {
  // Referans projenizdeki index.html'den alınan meta bilgileri
  title: "sharp-angular-craft Next ERP", // Proje adını ekleyelim
  description: "Lovable Generated Project (Next.js Refactor)",
  authors: [{ name: "Lovable" }, { name: "Sizin Adınız" }], // Kendinizi ekleyebilirsiniz
  openGraph: {
    title: "sharp-angular-craft Next ERP",
    description: "Lovable Generated Project",
    type: "website",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"], // Veya kendi OG resminiz
  },
  twitter: {
    card: "summary_large_image",
    site: "@lovable_dev", // Veya kendi Twitter hesabınız
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
  // İkonlar için: public klasörüne favicon.ico, apple-touch-icon.png vb. ekleyebilirsiniz.
  // icons: {
  //   icon: '/favicon.ico',
  //   apple: '/apple-touch-icon.png',
  // },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [ // Tema renklerini açık ve koyu mod için belirtebilirsiniz
    { media: '(prefers-color-scheme: light)', color: 'hsl(var(--background))' }, // Açık mod arkaplan
    { media: '(prefers-color-scheme: dark)', color: 'hsl(var(--background))' },  // Koyu mod arkaplan
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Geist font sınıflarını doğrudan html elementine ekliyoruz.
    // suppressHydrationWarning, tema değiştirirken classList uyuşmazlıklarını önler.
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <body>
        <Providers>
          {children}
        </Providers>
        {/* GPT Engineer Script (referans projedeki index.html'den) */}
        {/* Bu scripti gerçekten kullanıyorsanız ekleyebilirsiniz. */}
        {/* <script src="https://cdn.gpteng.co/gptengineer.js" type="module" async></script> */}
      </body>
    </html>
  );
}