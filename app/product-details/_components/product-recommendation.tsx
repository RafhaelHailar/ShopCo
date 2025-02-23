import { ProductCategory } from "components/product";
import type { Product } from "types/product";
import { tempData } from "~/shop/_lib/data";

export default function ProductRecommendation() {
  const productsData: Product[] = tempData.slice(4, 8);
  return (
    <div className="mt-20">
      <ProductCategory
        category="you might also like"
        items={productsData}
        option={{ hideViewAll: true }}
      />
    </div>
  );
}
