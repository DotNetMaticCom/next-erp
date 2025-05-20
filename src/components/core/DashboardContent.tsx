// src/components/core/DashboardContent.tsx
import React from "react";

const DashboardContent: React.FC<React.PropsWithChildren> = ({ children }) => {
  // Bu bileşen artık padding'i kendisi uygulamayacak,
  // bunun yerine DashboardLayout'taki <main> elementi padding'i uygulayacak.
  return <>{children ?? "İçerik alanı boş."}</>;
};

export default DashboardContent;