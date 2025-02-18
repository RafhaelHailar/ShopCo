import { createContext, useState, type ReactNode } from "react";

interface ShopSidebarContext {
  isOpen: boolean;
  toggle: () => void;
}

export const ShopSidebarContext = createContext<ShopSidebarContext>(
  {} as ShopSidebarContext
);

export default function ShopSidebarContextContainer({
  children,
}: {
  children: ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function toggleSidebar() {
    setIsSidebarOpen((v) => !v);
  }

  return (
    <ShopSidebarContext.Provider
      value={{ isOpen: isSidebarOpen, toggle: toggleSidebar }}
    >
      {children}
    </ShopSidebarContext.Provider>
  );
}
