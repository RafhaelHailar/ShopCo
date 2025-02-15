import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

interface Comment {
  id: number;
  comment: string;
  username: string;
  isVerified: boolean;
}

interface CommentBoxProps extends Comment {
  index: number;
  totalVisibleSlides: number;
  totalComments: number;
}

const dummyComments: Comment[] = [
  {
    id: 0,
    comment:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    username: "Sarah M.",
    isVerified: true,
  },
  {
    id: 1,
    comment:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    username: "Sarah M.",
    isVerified: true,
  },
  {
    id: 2,
    comment:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    username: "Sarah M.",
    isVerified: true,
  },
  {
    id: 3,
    comment:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    username: "Sarah M.",
    isVerified: true,
  },
  {
    id: 4,
    comment:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    username: "Sarah M.",
    isVerified: true,
  },
  {
    id: 5,
    comment:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    username: "Sarah M.",
    isVerified: true,
  },
  {
    id: 6,
    comment:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    username: "Sarah M.",
    isVerified: true,
  },
  {
    id: 7,
    comment:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    username: "Sarah M.",
    isVerified: true,
  },
];

function CommentBox({
  index,
  comment,
  username,
  isVerified,
  totalVisibleSlides,
  totalComments,
}: CommentBoxProps) {
  const swiper = useSwiper();
  const peripheralBlurred = swiper.width >= 768;
  const leftPeripheralIndex = swiper.realIndex;
  const rightPeripheralIndex =
    (swiper.realIndex + totalVisibleSlides) % totalComments;
  return (
    <>
      {peripheralBlurred &&
      (index === leftPeripheralIndex || index === rightPeripheralIndex) ? (
        <div className="border border-gray-300 rounded-xl flex flex-col gap-y-2 px-10 py-8 blur-xs">
          <div className="flex gap-x-1 xl:mb-2">
            {new Array(5).fill(null).map((_, i) => (
              <FaStar key={i} className="text-amber-400 text-xl" />
            ))}
          </div>
          <div className="flex items-center gap-x-1">
            <h5 className="font-bold text-xl">{username}</h5>
            <IoIosCheckmarkCircle className="text-2xl text-green-600" />
          </div>
          <div className="text-gray-500">"{comment}”</div>
        </div>
      ) : (
        <div className="border border-gray-200 rounded-xl flex flex-col gap-y-2 px-10 py-8">
          <div className="flex gap-x-1 xl:mb-2">
            {new Array(5).fill(null).map((_, i) => (
              <FaStar key={i} className="text-amber-400 text-xl" />
            ))}
          </div>
          <div className="flex items-center gap-x-1">
            <h5 className="font-bold text-xl">{username}</h5>
            <IoIosCheckmarkCircle className="text-2xl text-green-600" />
          </div>
          <div className="text-gray-500">"{comment}”</div>
        </div>
      )}
    </>
  );
}

function ReviewSlideCtrlButtons() {
  const swiper = useSwiper();

  const [targetIndex, setTargetIndex] = useState(0);
  const slideTo = () => {
    swiper.slideTo(targetIndex);
  };

  return (
    <div className="absolute -top-12 lg:-top-12 xl:-top-24 right-0 xl:left-340 2xl:left-420 text-2xl xl:text-4xl flex gap-x-5">
      <button className="cursor-pointer" onClick={() => swiper.slidePrev()}>
        <GoArrowLeft />
      </button>
      <button className="cursor-pointer" onClick={() => swiper.slideNext()}>
        <GoArrowRight />
      </button>
    </div>
  );
}

export default function MarketingReview() {
  const [sWW, setSWW] = useState(0);
  return (
    <section className="relative px-6 xl:px-24 overflow-hidden py-12 xl:py-24">
      <div className="mb-6 xl:mb-14 w-48 md:w-auto">
        <h2 className="text-xl xl:text-5xl">OUR HAPPY CUSTOMERS</h2>
      </div>
      <Swiper
        className="relative xl:-left-90 2xl:-left-110 w-full xl:w-[200%]"
        loop={true}
        spaceBetween={10}
        slidesPerView={1}
        onSlideChange={() => {
          setSWW(Math.random());
        }}
        init={false}
        onInit={(swiper) => {
          const swiperContainer = swiper.wrapperEl.parentElement;

          if (swiperContainer) {
            swiperContainer.style.overflow = "visible";
          }
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 22,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 22,
          },
          1280: {
            slidesPerView: 6,
            spaceBetween: 22,
          },
        }}
      >
        <ReviewSlideCtrlButtons />
        {dummyComments.map((data: Comment, i: number) => {
          return (
            <SwiperSlide className="relative" key={data.id}>
              <CommentBox
                id={data.id}
                index={i}
                comment={data.comment}
                username={data.username}
                isVerified={data.isVerified}
                totalVisibleSlides={4}
                totalComments={dummyComments.length}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
