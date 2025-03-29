"use client";
import { AppProvider } from "@/context/AppContext";
import { SidebarProvider } from "@/context/SidebarContext";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppProvider >
        {children}
      </AppProvider>
    </SidebarProvider>
  );
};