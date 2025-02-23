import { FaStar, FaStarHalf } from "react-icons/fa6";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Product } from "types/product";

interface ProductCategoryProps {
  category: string;
  items: Product[];
}

export function ProductCategory({ category, items }: ProductCategoryProps) {
  return (
    <div>
      <div className="mb-10 lg:mb-18">
        <h2 className="text-center text-3xl lg:text-5xl">
          {category.toUpperCase()}
        </h2>
      </div>
      <Swiper
        spaceBetween={10}
        slidesPerView={2}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
      >
        {items.map((item: Product, i) => {
          return (
            <SwiperSlide key={item.id}>
              <ProductContainer product={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="flex justify-center">
        <Link to="shop">
          <button className="w-full lg:w-auto mt-8 px-18 border border-gray-200 cursor-pointer rounded-3xl py-2 font-bold">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
}

interface PriceDisplayOption {
  priceTextSize?: string;
  discountPX?: number;
  discountPY?: number;
  discountTextSize?: string;
}

export function PriceDisplay({
  price,
  discount,
  option = {
    priceTextSize: "xl",
    discountPY: 1,
    discountPX: 3,
    discountTextSize: "xs",
  },
}: {
  price: number;
  discount: number;
  option?: PriceDisplayOption;
}) {
  const newPrice = price - price * discount;

  return (
    <div className="flex gap-x-2">
      <p
        className="font-bold text-sm lg:text-xl"
        style={{
          fontSize: `var(--text-${option.priceTextSize})`,
        }}
      >
        ${newPrice}
      </p>
      {discount > 0 ? (
        <>
          <p
            className="line-through text-gray-400 font-bold text-sm"
            style={{
              fontSize: `var(--text-${option.priceTextSize})`,
            }}
          >
            ${price}
          </p>
          <div className="flex items-center">
            <p
              className="bg-rose-100 text-rose-500 font-semibold text-lg flex justify-center items-center rounded-2xl py-1 px-1 lg:px-3"
              style={{
                fontSize: `var(--text-${option.discountTextSize})`,
                lineHeight: `var(--tw-leading, var(--text-${option.discountTextSize}--line-height)`,
                paddingBlock: `calc(var(--spacing) * ${option.discountPY})`,
                paddingInline: `calc(var(--spacing) * ${option.discountPX})`,
              }}
            >
              -{discount * 100}%
            </p>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

interface StarDisplayOption {
  starSpacing?: number;
  letterStarSpacing?: number;
  hideText?: boolean;
}

export function StarDisplay({
  rating,
  option = { letterStarSpacing: 1, starSpacing: 0.5, hideText: false },
}: {
  rating: number;
  option?: StarDisplayOption;
}) {
  // rating will be a value from 0 to 100,
  // that's why we have to convert it to a value from 0-5
  const convertedRating = (rating / 100) * 5;
  const fullStarTotal = Math.floor(convertedRating);
  const haveHalfStar = fullStarTotal % convertedRating >= 0.5;

  return (
    <div
      className="flex items-center"
      style={{
        columnGap: `calc(var(--spacing) * ${option.letterStarSpacing})`,
      }}
    >
      <div
        className="flex items-center text-xs lg:text-xl gap-x-0.5"
        style={{
          columnGap: `calc(var(--spacing) * ${option.starSpacing})`,
        }}
      >
        {new Array(fullStarTotal).fill(null).map((_, i) => (
          <FaStar key={i} className="text-amber-400" />
        ))}
        {haveHalfStar ? <FaStarHalf className="text-amber-400" /> : <></>}
      </div>
      {!option.hideText && (
        <p className="text-xs lg:text-md mt-1">
          {convertedRating}
          <i className="not-italic text-gray-500">/5</i>
        </p>
      )}
    </div>
  );
}

export default function ProductContainer({ product }: { product: Product }) {
  return (
    <div className="flex flex-col">
      <Link to={"/product/" + product.id}>
        <div className="max-h-35 lg:max-h-45 xl:max-h-80 w-full flex items-center justify-center rounded-xl overflow-hidden">
          <img src={product.image} className="w-full" />
        </div>
      </Link>
      <div className="flex flex-col gap-y-1 lg:gap-y-2 mt-4">
        <h5 className="font-bold text-xs lg:text-xl">{product.name}</h5>
        <StarDisplay rating={product.rating} />
        <PriceDisplay price={product.price} discount={product.discount} />
      </div>
    </div>
  );
}
