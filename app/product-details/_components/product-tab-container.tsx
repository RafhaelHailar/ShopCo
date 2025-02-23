import React, { useMemo, useState } from "react";
import type { Product } from "types/product";
import ProductReviews from "./product-reviews";
import { Swiper, SwiperSlide } from "swiper/react";

interface TabItem {
  name: string;
  Container: React.FC<{ productData: Product[] }>;
}

const TAB_DATA: TabItem[] = [
  {
    name: "Product Details",
    Container: function () {
      return <></>;
    },
  },
  {
    name: "Rating & Reviews",
    Container: ProductReviews,
  },
  {
    name: "FAQs",
    Container: function () {
      return <></>;
    },
  },
];

export default function ProductTabContainer() {
  const [tabIdx, setTabIdx] = useState(1);
  const element = useMemo(
    () => React.createElement(TAB_DATA[tabIdx].Container),
    [tabIdx]
  );
  return (
    <div className="mt-8 lg:mt-16 flex flex-col gap-y-10">
      <header className="overflow-hidden">
        <Swiper
          slidesPerView={2}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {TAB_DATA.map((tab: TabItem, i) => {
            const isActive = i === tabIdx;
            return (
              <SwiperSlide key={i}>
                <button
                  className="w-full cursor-pointer"
                  onClick={() => setTabIdx(i)}
                >
                  <div
                    className="flex items-center lg:text-lg justify-center border-b-2 py-3"
                    style={
                      {
                        borderColor: isActive
                          ? "black"
                          : "var(--color-gray-200)",
                        color: isActive ? "black" : "var(--color-gray-600)",
                        "--tw-font-weight": `var(--font-weight-${
                          isActive ? "semibold" : "normal"
                        })`,
                        fontWeight: `var(--font-weight-${
                          isActive ? "semibold" : "normal"
                        })`,
                      } as React.CSSProperties
                    }
                  >
                    {tab.name}
                  </div>
                </button>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </header>
      {element}
    </div>
  );
}
