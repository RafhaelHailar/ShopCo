import { StarDisplay, PriceDisplay } from "components/product";
import { useState } from "react";
import type { Product } from "types/product";

function ProductGallery({ productData }: { productData: Product }) {
  const [activeImageIdx, setActiveImageIdx] = useState<number>(0);
  const galleryImage = productData.gallery_image;

  return (
    <div className="flex w-full gap-x-3 h-[30rem]">
      <div className="flex flex-col h-full w-4/12 gap-y-3">
        {productData.gallery_image.map((imageSrc: string, i) => {
          return (
            <button
              onClick={() => setActiveImageIdx(i)}
              key={i}
              className="flex items-center flex-1 rounded-2xl overflow-hidden cursor-pointer"
              style={{
                border: activeImageIdx === i ? "2px solid #364153" : "",
              }}
            >
              <img src={imageSrc} className="w-full" />
            </button>
          );
        })}
      </div>
      <div className="w-full rounded-2xl overflow-hidden flex items-center">
        <img src={galleryImage[activeImageIdx]} className="w-full" />
      </div>
    </div>
  );
}

export default function ProductOverview({
  productData,
}: {
  productData: Product;
}) {
  return (
    <div className="flex gap-x-10">
      <ProductGallery productData={productData} />
      <div className="w-full">
        <div className="flex flex-col gap-y-3">
          <h2 className="text-4xl">{productData.name}</h2>
          <StarDisplay
            rating={productData.rating}
            option={{
              starSpacing: 2,
              letterStarSpacing: 2,
            }}
          />
          <PriceDisplay
            price={productData.price}
            discount={productData.discount}
            option={{
              priceTextSize: "3xl",
              discountPX: 4,
              discountPY: 1.5,
              discountTextSize: "sm",
            }}
          />
          <p className="text-gray-500">{productData.description}</p>
        </div>
      </div>
    </div>
  );
}
