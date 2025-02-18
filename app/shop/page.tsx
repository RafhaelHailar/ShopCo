import type { Route } from "./+types/page";
import { RiArrowRightSLine } from "react-icons/ri";
import ShopSidebar from "./_components/shop-sidebar";
import ShopItemContainer from "./_components/shop-product-container";
import ShopSidebarContextContainer, {
  ShopSidebarContext,
} from "./_components/shop-sidebar-context";
import Footer from "components/footer";
import Navbar from "components/navbar";
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
        <div className="pb-20">
          <div className="bg-gray-200 w-full h-0.5 px-4"></div>
          <div className="container-padding py-6 flex flex-col gap-y-2 lg:gap-y-6">
            <ul className="flex items-center gap-x-1">
              <li>
                <a href="#" className="text-gray-500">
                  Home
                </a>
              </li>
              <li>
                <RiArrowRightSLine className="mt-0.5 text-lg text-gray-600 font-black" />
              </li>
              <li>
                <a href="#">Casual</a>
              </li>
            </ul>
            <div className="flex lg:gap-x-6">
              <ShopSidebar />
              <div className="flex-1">
                <ShopItemContainer />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </SidebarBackgroundOverlay>
    </ShopSidebarContextContainer>
  );
}
