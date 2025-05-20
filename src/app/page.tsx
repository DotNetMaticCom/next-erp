// src/app/page.tsx
import { redirect } from 'next/navigation';

export default function RootPage() {
  // Doğrudan /dashboard'a yönlendir
  redirect('/dashboard');

  // Veya bir karşılama sayfası göster:
  // return (
  //   <main className="flex min-h-screen flex-col items-center justify-center p-24">
  //     <h1 className="text-4xl font-bold">Next ERP'ye Hoş Geldiniz</h1>
  //     <Link href="/dashboard" className="mt-4 text-blue-500 hover:underline">
  //       Gösterge Paneline Git
  //     </Link>
  //   </main>
  // );
}