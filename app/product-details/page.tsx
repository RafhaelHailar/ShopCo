import Navbar from "components/navbar";
import type { Route } from "./+types/page";
import Footer from "components/footer";
import { RouteHistoryDisplay } from "components/navbar";
import { tempData } from "~/shop/_lib/data";
import type { Product } from "types/product";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ShopCo" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home({ params }: Route.ComponentProps) {
  const productData = tempData[
    params.productId as keyof typeof tempData
  ] as Product;

  return (
    <main className="page">
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
          {
            name: productData.type + "s",
            path: "/shop/" + productData.type.toLowerCase(),
          },
        ]}
      >
        <div></div>
      </RouteHistoryDisplay>
      <Footer />
    </main>
  );
}
