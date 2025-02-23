import Navbar, { RouteHistoryDisplay } from "components/navbar";
import type { Route } from "./+types/page";
import Footer from "components/footer";
import MyCartContainer from "./_component/my-cart-container";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ShopCo" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
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
            name: "Cart",
            path: "/cart",
          },
        ]}
      >
        <div>
          <MyCartContainer />
        </div>
      </RouteHistoryDisplay>
      <Footer />
    </main>
  );
}
