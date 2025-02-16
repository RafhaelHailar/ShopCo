import { useEffect, useRef, useState } from "react";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import { RiArrowRightSLine, RiArrowUpSLine } from "react-icons/ri";

function PriceRange() {
  const minValue = 0;
  const maxValue = 1000;

  const [minPrice, setMinPrice] = useState(300);
  const [maxPrice, setMaxPrice] = useState(700);
  const [rangeWidth, setRangeWidth] = useState(0);

  const minX = (minPrice / maxValue) * (rangeWidth - 20);
  const maxX = (maxPrice / maxValue) * (rangeWidth - 20);

  const rangeContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (minPrice > maxPrice) {
      const tempMaxPrice = maxPrice;
      setMaxPrice(minPrice);
      setMinPrice(tempMaxPrice);
    }
  }, [minPrice, maxPrice]);

  useEffect(() => {
    if (rangeContainerRef && rangeContainerRef.current) {
      setRangeWidth(rangeContainerRef.current.offsetWidth);
    }
  }, []);

  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex justify-between items-center">
        <h5 className="font-bold text-lg">Price</h5>
        <RiArrowUpSLine className="text-xl" />
      </div>
      <div className="pb-8">
        <div
          className="min-max-slider h-1 text-xs font-bold"
          ref={rangeContainerRef}
        >
          <div className="absolute w-full h-full">
            <input
              type="range"
              id="minPrice"
              name="minPrice"
              value={minPrice}
              min={minValue}
              max={maxValue}
              onChange={(event) => {
                setMinPrice(Number(event.target.value));
              }}
            />
            <label
              htmlFor="minPrice"
              className="w-12 flex left-0 justify-center absolute top-4"
              style={{
                left: `calc(${minX}px - (2rem / 2))`,
              }}
            >
              ${minPrice}
            </label>
          </div>
          <div className="absolute w-full h-full">
            <input
              id="maxPrice"
              name="maxPrice"
              type="range"
              value={maxPrice}
              min={minValue}
              max={maxValue}
              onChange={(event) => {
                setMaxPrice(Number(event.target.value));
              }}
            />
            <label
              htmlFor="maxPrice"
              className="w-12 flex justify-center absolute top-4"
              style={{
                left: `calc(${maxX}px - (2rem / 2))`,
              }}
            >
              ${maxPrice}
            </label>
          </div>
          <div
            className="absolute w-full h-full bg-black"
            style={{
              width: `${maxX - minX + 5}px`,
              left: `${minX}px`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default function ShopSidebar() {
  return (
    <div className="border lg:w-64 rounded-2xl px-5 py-4 flex flex-col gap-y-4">
      <div className="flex items-center justify-between">
        <h5 className="font-bold text-lg">Filters</h5>
        <HiOutlineAdjustmentsVertical className="text-2xl text-gray-500" />
      </div>
      <div className="h-0.25 bg-gray-200"></div>
      <ul className="flex flex-col gap-y-3 text-gray-400">
        <li>
          <a href="#">
            <div className="flex justify-between w-full items-center">
              <p>T-shirts</p>
              <RiArrowRightSLine className="text-xl" />
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div className="flex justify-between w-full items-center">
              <p>Shorts</p>
              <RiArrowRightSLine className="text-xl" />
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div className="flex justify-between w-full items-center">
              <p>Shirts</p>
              <RiArrowRightSLine className="text-xl" />
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div className="flex justify-between w-full items-center">
              <p>Hoodie</p>
              <RiArrowRightSLine className="text-xl" />
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div className="flex justify-between w-full items-center">
              <p>Jeans</p>
              <RiArrowRightSLine className="text-xl" />
            </div>
          </a>
        </li>
      </ul>
      <div className="h-0.25 bg-gray-200"></div>
      <PriceRange />
      <div className="h-0.25 bg-gray-200"></div>
    </div>
  );
}
