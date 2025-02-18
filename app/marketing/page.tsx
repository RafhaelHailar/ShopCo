import Navbar from "components/navbar";
import type { Route } from "./+types/page";
import MarketingHeader from "./_components/marketing-header";
import MarketingProductsOverview from "./_components/marketing-products-overview";
import MarketingReview from "./_components/marketing-review";
import Footer from "components/footer";

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
      <MarketingHeader />
      <MarketingProductsOverview />
      <MarketingReview />
      <Footer />
    </main>
  );
}
