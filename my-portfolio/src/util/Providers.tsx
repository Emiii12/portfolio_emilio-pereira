"use client";
import { SidebarProvider } from "@/context/useSidebar";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      {children}
    </SidebarProvider>
  );
};