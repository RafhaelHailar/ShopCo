import { useContext, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { ScreenContext } from "components/screen-context";

interface Comment {
  id: number;
  comment: string;
  username: string;
  isVerified: boolean;
}

interface CommentBoxProps extends Comment {
  index: number;
  nextBlurredComment: number;
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
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    username: "Alex K.",
    isVerified: true,
  },
  {
    id: 3,
    comment:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    username: "James L.",
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
  nextBlurredComment,
  totalComments,
}: CommentBoxProps) {
  const swiper = useSwiper();
  const screenContext = useContext(ScreenContext);
  const screenWidth = screenContext.width;
  const isLargeScreen = screenWidth >= 1024;
  const leftPeripheralIndex = swiper.realIndex;
  const rightPeripheralIndex =
    ((swiper.realIndex + nextBlurredComment) % totalComments) -
    Number(isLargeScreen && screenWidth < 1280);

  return (
    <>
      {isLargeScreen &&
      (index === leftPeripheralIndex || index === rightPeripheralIndex) ? (
        <div className="border border-gray-300 rounded-xl flex flex-col gap-y-2 px-10 py-8 blur-xs h-full">
          <div className="flex gap-x-1 xl:mb-2">
            {new Array(5).fill(null).map((_, i) => (
              <FaStar key={i} className="text-amber-400 text-xl" />
            ))}
          </div>
          <div className="flex items-center gap-x-1">
            <h5 className="font-bold text-xl">{username}</h5>
            <IoIosCheckmarkCircle className="text-2xl text-green-600" />
          </div>
          <div className="text-gray-600 text-md xl:text-lg">"{comment}”</div>
        </div>
      ) : (
        <div className="border border-gray-200 rounded-xl flex flex-col gap-y-2 px-10 py-8 h-full">
          <div className="flex gap-x-2 xl:mb-2">
            {new Array(5).fill(null).map((_, i) => (
              <FaStar key={i} className="text-amber-400 text-lg lg:text-2xl" />
            ))}
          </div>
          <div className="flex items-center gap-x-1">
            <h5 className="font-bold text-lg lg:text-xl">{username}</h5>
            <IoIosCheckmarkCircle className="text-xl lg:text-2xl text-green-600" />
          </div>
          <div className="text-gray-600 text-md xl:text-lg">"{comment}”</div>
        </div>
      )}
    </>
  );
}

function ReviewSlideCtrlButtons() {
  const swiper = useSwiper();

  return (
    <div className="absolute -top-12 xl:-top-24 right-0 lg:left-290 xl:left-340 2xl:left-420 text-2xl xl:text-4xl flex gap-x-5">
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
    <section className="relative container-padding overflow-hidden py-12 xl:py-24">
      <div className="mb-6 xl:mb-14 w-48 md:w-auto">
        <h2 className="text-2xl xl:text-5xl">OUR HAPPY CUSTOMERS</h2>
      </div>
      <Swiper
        className="relative lg:-left-104 xl:-left-90 2xl:-left-110 w-full lg:w-[200%] h-auto md:h-[270px] lg:h-[260px] xl:h-[340px] 2xl:h-[280px]"
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
            slidesPerView: 4,
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
                nextBlurredComment={4}
                totalComments={dummyComments.length}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
