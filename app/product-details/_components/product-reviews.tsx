import DropDown from "components/drop-down";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
export default function ProductReviews() {
  return (
    <div className="flex flex-col gap-y-5">
      <header className="flex justify-between">
        <div className="flex items-end gap-x-2">
          <h4 className="font-bold text-2xl">All Reviews</h4>
          <p className="text-gray-500">(451)</p>
        </div>
        <div className="flex gap-x-3 items-center">
          <div>
            <button className="p-3 bg-gray-200 rounded-full">
              <HiOutlineAdjustmentsVertical className="text-xl font-bold" />
            </button>
          </div>
          <DropDown items={["Latest", "Oldest"]} />
          <button className="px-5 py-2 bg-black text-white rounded-4xl">
            Write a Review
          </button>
        </div>
      </header>
      <div></div>
      <div></div>
    </div>
  );
}
