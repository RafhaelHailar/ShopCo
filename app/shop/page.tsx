import type { Route } from "./+types/page";
import { RiArrowRightSLine } from "react-icons/ri";
import ShopSidebar from "./_components/shop-sidebar";
import ShopItemContainer from "./_components/shop-product-container";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ShopCo" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <div className="bg-gray-200 w-full h-0.5 px-4"></div>
      <div className="container-padding py-6 flex flex-col gap-y-6">
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
        <div className="flex gap-x-6">
          <ShopSidebar />
          <div className="flex-1">
            <ShopItemContainer />
          </div>
        </div>
      </div>
    </div>
  );
}
