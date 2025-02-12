import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaStar, FaStarHalf } from "react-icons/fa";
import TShirtWithTapeDetailsImg from "/images/t-shirt-with-tape-details.jpg";

interface Product {
  id: number;
  image: string;
  name: string;
  rating: number;
  price: number;
  discount: number;
}

interface ProductCategoryProps {
  category: string;
  items: Product[];
}

function ProductCategory({ category, items }: ProductCategoryProps) {
  return (
    <div className="px-6 xl:px-24">
      <div className="mb-10 lg:mb-18">
        <h2 className="text-center font-[IntegralCF] text-3xl lg:text-5xl">
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
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {items.map((item: Product, i) => {
          // rating will be a value from 0 to 100,
          // that's why we have to convert it to a value from 0-5
          const rating = (item.rating / 100) * 5;
          const fullStarTotal = Math.floor(rating);
          const haveHalfStar = fullStarTotal % rating >= 0.5;

          const price = item.price - item.price * item.discount;

          return (
            <SwiperSlide key={item.id}>
              <div className="w-full relative flex items-center justify-center">
                <img src={item.image} className="w-full" />
              </div>
              <div className="flex flex-col gap-y-1 mt-4">
                <h5 className="font-bold text-sm lg:text-lg">{item.name}</h5>
                <div className="flex items-center gap-x-1">
                  <div className="flex items-center">
                    {new Array(fullStarTotal).fill(null).map((_, i) => (
                      <FaStar key={i} className="text-amber-400" />
                    ))}
                    {haveHalfStar ? (
                      <FaStarHalf className="text-amber-400" />
                    ) : (
                      <></>
                    )}
                  </div>
                  <p className="text-xs mt-1">
                    {rating}
                    <i className="not-italic text-gray-500">/5</i>
                  </p>
                </div>
                <div className="flex gap-x-2">
                  <p className="font-bold text-lg">${price}</p>
                  {item.discount > 0 ? (
                    <>
                      <p className="line-through text-gray-400 font-bold text-lg">
                        ${item.price}
                      </p>
                      <p className="bg-rose-100 text-rose-500 font-medium text-xs flex justify-center items-center rounded-2xl px-3">
                        -{item.discount * 100}%
                      </p>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="flex justify-center">
        <button className="w-full lg:w-auto mt-8 px-18 border border-gray-200 cursor-pointer rounded-3xl py-2 font-bold">
          View All
        </button>
      </div>
    </div>
  );
}

export default function MarketingProductsOverview() {
  const newArrivalsData: Product[] = [
    {
      id: 0,
      image: TShirtWithTapeDetailsImg,
      name: "T-shirt with Tape Details",
      rating: 60,
      price: 120,
      discount: 0,
    },
    {
      id: 1,
      image: TShirtWithTapeDetailsImg,
      name: "Skinny Fit Jeans",
      rating: 90,
      price: 120,
      discount: 0.2,
    },
    {
      id: 2,
      image: TShirtWithTapeDetailsImg,
      name: "Checkered Shirt",
      rating: 90,
      price: 180,
      discount: 0,
    },
    {
      id: 3,
      image: TShirtWithTapeDetailsImg,
      name: "Sleeve Striped T-shirt",
      rating: 90,
      price: 120,
      discount: 0.3,
    },
  ];
  return (
    <section className="py-14 lg:py-24 flex flex-col gap-y-8 xl:gap-y-12">
      <ProductCategory category="new arrivals" items={newArrivalsData} />
      <div className="xl:px-24">
        <div className="w-full h-0.5 bg-gray-200"></div>
      </div>
      <ProductCategory category="top selling" items={newArrivalsData} />
    </section>
  );
}
