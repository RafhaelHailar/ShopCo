import type { Route } from "./+types/page";
import MarketingHeader from "./_components/marketing-header";
import MarketingProductsOverview from "./_components/marketing-products-overview";
import MarketingReview from "./_components/marketing-review";
import MarketingFooter from "./_components/marketing-footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ShopCo" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main className="max-w-[1920px] w-full">
      <div className="bg-black text-white text-center w-full">
        <p className="text-sm font-light py-2">
          Sign up and get 20% off to your first order.&nbsp;
          <a href="#" className="underline underline-offset-4">
            Sign Up Now
          </a>
        </p>
      </div>
      <div>
        <MarketingHeader />
        <MarketingProductsOverview />
        <MarketingReview />
        <MarketingFooter />
      </div>
    </main>
  );
}
