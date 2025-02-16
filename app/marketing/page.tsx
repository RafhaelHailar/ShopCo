import type { Route } from "./+types/page";
import MarketingHeader from "./_components/marketing-header";
import MarketingProductsOverview from "./_components/marketing-products-overview";
import MarketingReview from "./_components/marketing-review";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ShopCo" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <MarketingHeader />
      <MarketingProductsOverview />
      <MarketingReview />
    </div>
  );
}
