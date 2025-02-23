import DropDown from "components/drop-down";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import type { ProductReview } from "types/product";
import { dummyReview } from "../_lib/data";
import { StarDisplay } from "components/product";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { LuEllipsis } from "react-icons/lu";
import { useState } from "react";

function ReviewsContainer({ review }: { review: ProductReview }) {
  return (
    <div className="px-8 border border-gray-200 py-7 rounded-2xl">
      <div>
        <div className="flex justify-between">
          <div>
            <StarDisplay rating={review.rating} option={{ hideText: true }} />
          </div>
          <button>
            <LuEllipsis className="text-gray-500 text-2xl" />
          </button>
        </div>
        <div className="flex flex-col gap-y-2 mt-2">
          <div className="flex gap-x-1">
            <h5 className="text-lg font-bold">{review.name}</h5>
            {review.isVerified && (
              <IoIosCheckmarkCircle className="text-xl lg:text-2xl text-green-600" />
            )}
          </div>
          <div className="pr-15">
            <p className="text-gray-500">"{review.comment}"</p>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-gray-500 font-semibold text-sm">
            Posted on {review.datePosted}
          </p>
        </div>
      </div>
    </div>
  );
}

interface PaginatedReviewsProps {
  reviews: ProductReview[];
  initialLength: number;
  addedLength: number;
}

function PaginatedReviews({
  reviews,
  initialLength,
  addedLength,
}: PaginatedReviewsProps) {
  const [totalAdded, setTotalAdded] = useState(0);
  const paginatedData = reviews.slice(
    0,
    initialLength + addedLength * totalAdded
  );
  const isShownAll = paginatedData.length === reviews.length;
  return (
    <div className="flex flex-col gap-y-10">
      <div className="grid grid-cols-2 gap-5">
        {paginatedData.map((review: ProductReview) => {
          return <ReviewsContainer key={review.id} review={review} />;
        })}
      </div>
      <div className="flex justify-center">
        <button
          className="font-bold px-8 text-sm cursor-pointer py-3 border border-gray-200 rounded-4xl"
          onClick={() =>
            isShownAll ? setTotalAdded(0) : setTotalAdded((v) => v + 1)
          }
        >
          {isShownAll ? "Close Loaded Reviews" : "Load More Reviews"}
        </button>
      </div>
    </div>
  );
}

export default function ProductReviews() {
  return (
    <div className="flex flex-col gap-y-8">
      <header className="flex justify-between">
        <div className="flex items-end gap-x-2">
          <h4 className="font-bold text-2xl">All Reviews</h4>
          <p className="text-gray-500">(451)</p>
        </div>
        <div className="flex gap-x-3 items-center">
          <div>
            <button className="p-3 bg-gray-200 rounded-full cursor-pointer">
              <HiOutlineAdjustmentsVertical className="text-xl font-bold" />
            </button>
          </div>
          <DropDown items={["Latest", "Oldest"]} />
          <button className="px-6 py-3 bg-black text-white rounded-4xl">
            Write a Review
          </button>
        </div>
      </header>
      <PaginatedReviews
        reviews={dummyReview}
        initialLength={6}
        addedLength={4}
      />
    </div>
  );
}
