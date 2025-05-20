// src/app/not-found.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Frown } from "lucide-react"; // Bir ikon ekleyelim

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-6 text-center">
      <Frown className="h-24 w-24 text-primary mb-6" strokeWidth={1.5} />
      <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
        404
      </h1>
      <p className="mt-4 text-xl text-muted-foreground sm:text-2xl">
        Oops! Aradığınız sayfayı bulamadık.
      </p>
      <p className="mt-2 text-base text-muted-foreground">
        Belki yanlış bir adres girdiniz veya sayfa taşınmış olabilir.
      </p>
      <Button asChild size="lg" className="mt-10">
        <Link href="/dashboard">Ana Sayfaya Dön</Link>
      </Button>
    </div>
  );
}