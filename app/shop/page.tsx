import type { Route } from "./+types/page";
import ShopSidebar from "./_components/shop-sidebar";
import ShopItemContainer from "./_components/shop-product-container";
import ShopSidebarContextContainer, {
  ShopSidebarContext,
} from "./_components/shop-sidebar-context";
import Footer from "components/footer";
import Navbar, { RouteHistoryDisplay } from "components/navbar";
import { useContext, type ReactNode } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ShopCo" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

function SidebarBackgroundOverlay({ children }: { children: ReactNode[] }) {
  const shopSidebarContext = useContext(ShopSidebarContext);

  return (
    <main className="page">
      {shopSidebarContext.isOpen && (
        <div
          className="w-full h-full absolute top-0 left-0 z-5"
          style={{ background: "rgba(0,0,0,0.3)" }}
        ></div>
      )}
      <div
        className="overflow-hidden"
        style={{
          height: shopSidebarContext.isOpen ? "100vh" : "auto",
        }}
      >
        {...children}
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <ShopSidebarContextContainer>
      <SidebarBackgroundOverlay>
        <Navbar />
        <RouteHistoryDisplay
          routes={[
            {
              name: "Home",
              path: "/",
            },
            {
              name: "Shop",
              path: "/shop",
            },
          ]}
        >
          <div className="flex lg:gap-x-6">
            <ShopSidebar />
            <div className="flex-1">
              <ShopItemContainer />
            </div>
          </div>
        </RouteHistoryDisplay>
        <Footer />
      </SidebarBackgroundOverlay>
    </ShopSidebarContextContainer>
  );
}
