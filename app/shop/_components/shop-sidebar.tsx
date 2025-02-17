import React, {
  useEffect,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import {
  RiArrowRightSLine,
  RiArrowUpSLine,
  RiArrowDownSLine,
} from "react-icons/ri";
import { IoMdCheckmark } from "react-icons/io";

function toggleListAddRemove<T>(
  setter: Dispatch<SetStateAction<T[]>>,
  item: T
) {
  setter((items: T[]) => {
    const itemsSet = new Set(items);
    if (itemsSet.has(item)) {
      itemsSet.delete(item);
    } else {
      itemsSet.add(item);
    }
    return [...itemsSet];
  });
}

function DropDownContainer({
  children,
  category,
  contentHeight,
  headerContentGap = 0,
}: {
  children: React.ReactNode;
  category: string;
  contentHeight: number;
  headerContentGap?: number;
}) {
  const [isActive, setIsActive] = useState<boolean>(true);
  return (
    <div
      className="flex flex-col"
      style={{
        rowGap: isActive ? `calc(var(--spacing) * ${headerContentGap})` : 0,
      }}
    >
      <div>
        <button
          className="flex justify-between items-center cursor-pointer w-full"
          onClick={() => setIsActive((v) => !v)}
        >
          <h5 className="font-bold text-lg">{category}</h5>
          {isActive ? (
            <RiArrowUpSLine className="text-xl" />
          ) : (
            <RiArrowDownSLine className="text-xl" />
          )}
        </button>
      </div>
      <div
        className="transition-all flex w-full items-center overflow-hidden"
        style={{
          height: `calc(var(--spacing) * ${contentHeight})`,
          maxHeight: isActive ? `calc(var(--spacing) * ${contentHeight})` : 0,
        }}
      >
        {children}
      </div>
    </div>
  );
}

interface SelectionLink {
  name: string;
  url: string;
}

function LinkSelectionList({ selections }: { selections: SelectionLink[] }) {
  return (
    <ul className="flex flex-col gap-y-3 text-gray-400">
      {selections.map((selection: SelectionLink, i: number) => {
        return (
          <li key={i}>
            <a href={selection.url}>
              <div className="flex justify-between w-full items-center">
                <p>{selection.name}</p>
                <RiArrowRightSLine className="text-xl" />
              </div>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

function StylePicker() {
  const links: SelectionLink[] = [
    {
      name: "Casual",
      url: "#",
    },
    {
      name: "Formal",
      url: "#",
    },
    {
      name: "Party",
      url: "#",
    },
    {
      name: "Gym",
      url: "#",
    },
  ];
  return (
    <DropDownContainer
      category="Dress Style"
      headerContentGap={2}
      contentHeight={36}
    >
      <LinkSelectionList selections={links} />
    </DropDownContainer>
  );
}

function SizePicker() {
  const sizes = [
    "XX-Small",
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "XX-Large",
    "3X-Large",
    "4X-Large",
  ];
  const [allowedSizes, setAllowedSizes] = useState<string[]>([]);

  return (
    <DropDownContainer category="Size" headerContentGap={2} contentHeight={58}>
      <ul className="flex flex-wrap gap-2 text-sm text-gray-600">
        {sizes.map((size: string, i: number) => {
          const isAllowed = allowedSizes.includes(size);
          return (
            <li key={i}>
              <button
                style={{
                  background: isAllowed ? "black" : "#f3f4f6",
                  color: isAllowed ? "white" : "#4a5565",
                }}
                className="px-5 py-2 bg-gray-100 rounded-4xl cursor-pointer"
                onClick={() => {
                  toggleListAddRemove(setAllowedSizes, size);
                }}
              >
                {size}
              </button>
            </li>
          );
        })}
      </ul>
    </DropDownContainer>
  );
}

function ColorPicker() {
  const colors = [
    "#00C12B",
    "#F50606",
    "#F5DD06",
    "#F57906",
    "#06CAF5",
    "#063AF5",
    "#7D06F5",
    "#F506A4",
    "#FFFFFF",
    "#000000",
  ];

  const [allowedColors, setAllowedColors] = useState<string[]>([]);

  return (
    <DropDownContainer contentHeight={22} headerContentGap={2} category="Color">
      <ul className="flex flex-wrap w-full gap-2 justify-between items-center">
        {colors.map((color: string, i: number) => {
          const isAllowed = allowedColors.includes(color);

          return (
            <li key={i}>
              <button
                style={{
                  background: color,
                  borderColor: `rgba(0,0,0,0.05)`,
                  boxShadow: isAllowed ? `0 0 5px ${color}` : "",
                }}
                className="w-8 h-8 rounded-full cursor-pointer flex items-center justify-center border"
                onClick={() => {
                  toggleListAddRemove(setAllowedColors, color);
                }}
              >
                {isAllowed ? (
                  <IoMdCheckmark
                    className="text-white text-lg"
                    style={{
                      color: color == "#FFFFFF" ? "black" : "white",
                    }}
                  />
                ) : (
                  <></>
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </DropDownContainer>
  );
}

function PriceRange() {
  const minValue = 0;
  const maxValue = 1000;

  const [isActive, setIsActive] = useState<boolean>(false);

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
    <DropDownContainer category="Price" contentHeight={16}>
      <div
        className="min-max-slider h-1 text-xs w-full font-bold"
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
            className="w-12 flex left-0 justify-center absolute"
            style={{
              top: `${maxPrice - minPrice < 100 ? "-28px" : "16px"}`,
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
    </DropDownContainer>
  );
}

function TypePicker() {
  const types: SelectionLink[] = [
    {
      name: "T-shirts",
      url: "#",
    },
    {
      name: "Shorts",
      url: "#",
    },
    {
      name: "Shirts",
      url: "#",
    },
    {
      name: "Hoodie",
      url: "#",
    },
    {
      name: "Jeans",
      url: "#",
    },
  ];
  return <LinkSelectionList selections={types} />;
}

export default function ShopSidebar() {
  return (
    <div className="border border-gray-300 lg:w-64 rounded-2xl px-5 py-6 hidden xl:flex flex-col gap-y-4">
      <div className="flex items-center justify-between">
        <h5 className="font-bold text-lg">Filters</h5>
        <HiOutlineAdjustmentsVertical className="text-2xl text-gray-500" />
      </div>
      <div className="h-0.25 bg-gray-200"></div>
      <TypePicker />
      <div className="h-0.25 bg-gray-200"></div>
      <PriceRange />
      <div className="h-0.25 bg-gray-200"></div>
      <ColorPicker />
      <div className="h-0.25 bg-gray-200"></div>
      <SizePicker />
      <div className="h-0.25 bg-gray-200"></div>
      <StylePicker />
      <button className="bg-black text-white py-3 cursor-pointer rounded-4xl text-xs">
        Apply Filter
      </button>
    </div>
  );
}
