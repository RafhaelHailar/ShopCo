import { useEffect, useState } from "react";
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";

function ReviewSlideCtrlButtons() {
  const swiper = useSwiper();

  const [targetIndex, setTargetIndex] = useState(0);
  const slideTo = () => {
    swiper.slideTo(targetIndex);
  };
  return (
    <div>
      <div className="bg-black inline-block px-5 py-2">
        <input
          type="number"
          className="bg-white"
          onChange={(event) => setTargetIndex(Number(event.target.value))}
        />
        <button className="bg-white" onClick={slideTo}>
          move
        </button>
      </div>
      <button onClick={() => swiper.slidePrev()}>Prev Slide</button>
      <button onClick={() => swiper.slideNext()}>Next Slide</button>
    </div>
  );
}

export default function MarketingReview() {
  const [sWW, setSWW] = useState(0);
  return (
    <section className="relative">
      <div className="px-24 overflow-hidden">
        <Swiper
          className="relative -left-110 w-[200%]"
          autoplay={true}
          loop={true}
          spaceBetween={10}
          slidesPerView={6}
          onSlideChange={(swiper) => {
            setSWW(Math.random());
          }}
          onSwiper={(swiper) => console.log(swiper)}
          init={false}
          onInit={(swiper) => {
            const swiperContainer = swiper.wrapperEl.parentElement;

            if (swiperContainer) {
              swiperContainer.style.overflow = "visible";
            }
          }}
        >
          <ReviewSlideCtrlButtons />
          {new Array(12).fill(null).map((_, i) => {
            function Example() {
              const d = useSwiperSlide();
              const s = useSwiper();

              let leftPeripheralIndex = s.realIndex;
              const rightPeripheralIndex = (s.realIndex + 4) % 12;
              return (
                <>
                  {i === leftPeripheralIndex || i === rightPeripheralIndex ? (
                    <div className="bg-red-500 h-[300px] flex justify-center items-center relative blur-md">
                      <div className="text-black absolute top-0 left-0 font-bold">
                        Active
                        {Math.random()}
                      </div>
                      <div className="text-white font-bold text-2xl">{i}</div>
                    </div>
                  ) : (
                    <div className="bg-green-500 absolute w-full h-[300px] flex justify-center items-center">
                      <div className="text-white font-bold text-2xl">{i}</div>
                    </div>
                  )}
                </>
              );
            }

            return (
              <SwiperSlide className="relative" key={i}>
                <Example />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
