import { StarDisplay, PriceDisplay } from "components/product";
import { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import type { Product } from "types/product";
import { FiMinus, FiPlus } from "react-icons/fi";

function QuantityModifier() {
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <div className="w-8/12 lg:w-6/12 xl:w-4/12">
      <div className="flex items-center bg-stone-100 rounded-4xl overflow-hidden py-3">
        <button
          className="cursor-pointer h-full pl-5 xl:pr-2"
          onClick={() => setQuantity((q) => (q > 1 ? q - 1 : q))}
        >
          <FiMinus />
        </button>
        <input
          type="number"
          disabled
          className="text-center w-full"
          value={quantity}
        />
        <button
          className="cursor-pointer h-full pr-5"
          onClick={() => setQuantity((q) => q + 1)}
        >
          <FiPlus />
        </button>
      </div>
    </div>
  );
}

function SizeSelection({ sizes }: { sizes: string[] }) {
  const [chosenSizeIdx, setChosenSizeIdx] = useState<number>(0);

  return (
    <div className="flex flex-col gap-y-3">
      <h5 className="text-gray-500">Choose Size</h5>
      <div className="flex gap-3 flex-wrap">
        {sizes.map((size, i) => {
          const isChosen = i === chosenSizeIdx;
          return (
            <button
              key={i}
              className="cursor-pointer"
              onClick={() => setChosenSizeIdx(i)}
            >
              <div
                className="px-5 py-2 bg-stone-100 text-gray-500 rounded-4xl"
                style={{
                  color: isChosen ? "white" : "var(--color-gray-500) ",
                  background: isChosen ? "black" : "var(--color-stone-100)",
                }}
              >
                {size}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ColorSelection({ colors }: { colors: string[] }) {
  const [chosenColorIdx, setChosenColorIdx] = useState<number>(0);

  return (
    <div className="flex flex-col gap-y-3">
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
    <div className="flex md:flex-row flex-col w-full gap-3 h-[25rem] xl:h-[32rem]">
      <div className="md:order-1 order-2 flex flex-row md:flex-col md:h-full md:w-4/12 gap-3 h-3/12">
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
      <div className="md:order-2 order-1 w-full rounded-2xl overflow-hidden flex items-center">
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
    <div className="flex gap-10 lg:flex-row flex-col">
      <ProductGallery galleryImage={productData.gallery_image} />
      <div className="w-full flex flex-col gap-y-4 justify-between">
        <div className="flex flex-col gap-y-1 lg:gap-y-3">
          <h2 className="text-xl lg:text-2xl xl:text-4xl">
            {productData.name}
          </h2>
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
        <SizeSelection sizes={productData.available_sizes} />
        <div className="h-0.5 bg-gray-100"></div>
        <div className="flex gap-x-2 lg:gap-x-5">
          <QuantityModifier />
          <div className="w-full flex gap-x-1 lg:gap-x-5 text-sm lg:text-md">
            <button className="border cursor-pointer border-gray-200 rounded-4xl w-full">
              Buy Now
            </button>
            <button className="bg-black cursor-pointer text-white rounded-4xl w-full">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
