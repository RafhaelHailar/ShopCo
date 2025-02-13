import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import TShirtWithTapeDetailsImg from "/images/t-shirt-with-tape-details.jpg";
import CasualStyleImg from "/images/casual-style.jpg";
import FormalStyleImg from "/images/formal-style.jpg";
import GymStyleImg from "/images/gym-style.jpg";
import PartyStyleImg from "/images/party-style.jpg";

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
    <section className="px-6 xl:px-24">
      <div className="py-14 lg:py-24 flex flex-col gap-y-8 xl:gap-y-12">
        <ProductCategory category="new arrivals" items={newArrivalsData} />
        <div className="xl:px-24">
          <div className="w-full h-0.5 bg-gray-200"></div>
        </div>
        <ProductCategory category="top selling" items={newArrivalsData} />
      </div>
      <div className="px-6 xl:px-16 bg-zinc-100 py-12 xl:py-18">
        <div className="flex justify-center mb-8 xl:mb-16">
          <h2 className="text-3xl w-[250px] lg:w-auto text-center lg:text-5xl">
            BROWSE BY DRESS STYLE
          </h2>
        </div>
        <div className="xl:grid xl:grid-cols-5 flex-col flex gap-4 xl:h-[600px]">
          <div className="w-full xl:h-auto h-[200px] col-span-2 rounded-2xl relative overflow-hidden">
            <img
              src={CasualStyleImg}
              className="absolute top-10 -left-5 scale-200"
            />
            <p className="text-black absolute top-5 left-8 xl:top-10 xl:left-10 text-2xl xl:text-4xl font-bold">
              Casual
            </p>
          </div>
          <div className="w-full xl:h-auto h-[200px] bg-white col-span-3 rounded-2xl relative overflow-hidden">
            <img
              src={FormalStyleImg}
              className="absolute top-15 xl:top-20 left-40 xl:left-80 scale-220 xl:scale-200"
            />
            <p className="text-black absolute top-5 left-8 xl:top-10 xl:left-10 text-2xl xl:text-4xl font-bold">
              Formal
            </p>
          </div>
          <div className="w-full xl:h-auto h-[200px] col-span-3 bg-white rounded-2xl relative overflow-hidden">
            <img
              src={PartyStyleImg}
              className="absolute scale-110 -top-10 left-15 lg:-top-35 xl:left-25"
            />
            <p className="text-black absolute top-10 left-10 text-2xl xl:text-4xl font-bold">
              Party
            </p>
          </div>
          <div className="w-full xl:h-auto h-[200px] col-span-2 bg-white rounded-2xl relative overflow-hidden">
            <img
              src={GymStyleImg}
              className="absolute -top-25 lg:-top-35 left-15 xl:left-27"
            />
            <p className="text-black absolute top-10 left-10 text-2xl xl:text-4xl font-bold">
              Gym
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
