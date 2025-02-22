import { StarDisplay, PriceDisplay } from "components/product";
import { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import type { Product } from "types/product";

function ColorSelection({ colors }: { colors: string[] }) {
  const [chosenColorIdx, setChosenColorIdx] = useState<number>(0);

  return (
    <div className="flex flex-col gap-y-3 pb-3">
      <h5 className="text-gray-500">Select Colors</h5>
      <div className="flex gap-x-4">
        {colors.map((color, i) => (
          <button
            key={i}
            className="cursor-pointer"
            onClick={() => setChosenColorIdx(i)}
          >
            <div
              className="rounded-full w-10 h-10 flex items-center justify-center"
              style={{
                background: color,
              }}
            >
              {chosenColorIdx === i ? (
                <IoMdCheckmark
                  className="text-white text-lg"
                  style={{
                    color: color == "#FFFFFF" ? "black" : "white",
                  }}
                />
              ) : (
                <></>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function ProductGallery({ galleryImage }: { galleryImage: string[] }) {
  const [activeImageIdx, setActiveImageIdx] = useState<number>(0);

  return (
    <div className="flex w-full gap-x-3 h-[30rem]">
      <div className="flex flex-col h-full w-4/12 gap-y-3">
        {galleryImage.map((imageSrc: string, i) => {
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
      <ProductGallery galleryImage={productData.gallery_image} />
      <div className="w-full flex flex-col gap-y-4">
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
        <div className="h-0.5 bg-gray-100"></div>
        <ColorSelection colors={productData.available_colors} />
        <div className="h-0.5 bg-gray-100"></div>
      </div>
    </div>
  );
}
