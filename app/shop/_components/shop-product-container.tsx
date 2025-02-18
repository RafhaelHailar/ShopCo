import type { Product } from "types/product";
import { tempData } from "../_lib/data";
import ProductContainer from "components/product";
import { useContext, useMemo, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { ScreenContext } from "components/screen-context";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import { ShopSidebarContext } from "./shop-sidebar-context";

function PaginatedDatas({
  data,
  ContainerComponent,
  index,
  length,
}: {
  data: any[];
  ContainerComponent: React.FC<any>;
  index: number;
  length: number;
}) {
  const screenContext = useContext(ScreenContext);

  // products pagination
  const [currentIndex, setCurrentIndex] = useState<number>(index);
  const dataLength = data.length;
  const pointer = currentIndex * length;
  const paginatedData = data.slice(pointer, pointer + length);
  const totalPage = Math.ceil(dataLength / length);

  const isMediumScreen = screenContext.width >= 768;
  const pageBtnsValue: (string | number)[] = useMemo(() => {
    if (isMediumScreen) {
      if (totalPage > 7) {
        return [1, 2, 3, "...", totalPage - 2, totalPage - 1, totalPage];
      }
    } else {
      if (totalPage > 5) {
        return [1, 2, "...", totalPage - 1, totalPage];
      }
    }

    return pageBtnsValue.slice(0, totalPage);
  }, [isMediumScreen]);

  const screenOffset = Number(!isMediumScreen);

  if (totalPage > 7) {
    if (
      currentIndex > 1 - screenOffset &&
      currentIndex < totalPage - (4 - screenOffset)
    ) {
      if (isMediumScreen) {
        pageBtnsValue[3] = currentIndex + 2;
        pageBtnsValue[2] = currentIndex + 1;
        pageBtnsValue[1] = currentIndex;
        pageBtnsValue[0] = currentIndex - 1;
      } else {
        pageBtnsValue[2] = currentIndex + 2;
        pageBtnsValue[1] = currentIndex + 1;
        pageBtnsValue[0] = currentIndex;
      }
    }

    if (totalPage - currentIndex > 5 - screenOffset) {
      pageBtnsValue[3 - screenOffset] = "...";
    }
  }

  return (
    <div className="flex flex-col gap-y-8 w-full">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 w-full">
        {paginatedData.map((data: Product, i: number) => (
          <ContainerComponent key={i} product={data} />
        ))}
      </div>
      <div className="h-0.5 bg-gray-200"></div>
      <div className="flex justify-between">
        <div>
          <button
            className="flex items-center gap-x-1 lg:gap-x-2 cursor-pointer px-2 lg:px-4 h-full lg:h-auto py-2 border border-gray-300 rounded-lg"
            onClick={() =>
              setCurrentIndex((currentIndex) =>
                currentIndex > 0 ? currentIndex - 1 : currentIndex
              )
            }
          >
            <FiArrowLeft className="text-lg lg:text-xl" />
            <p className="text-xs lg:text-sm font-semibold">Previous</p>
          </button>
        </div>
        <div className="flex">
          {pageBtnsValue.map((value: string | number, i: number) => {
            const isAtIndex = currentIndex + 1 === value;
            return (
              <button
                onClick={() => {
                  if (typeof value === "number") {
                    setCurrentIndex(value - 1);
                  }
                }}
                key={i}
                style={{
                  background: isAtIndex ? "var(--color-gray-100)" : "white",
                  color: isAtIndex ? "black" : "var(--color-gray-400)",
                }}
                className="font-semibold px-3 py-2 cursor-pointer w-9 lg:w-10 h-9 lg:h-10 flex items-center justify-center rounded-lg text-xs lg:text-sm"
              >
                {value}
              </button>
            );
          })}
        </div>
        <div>
          <button
            className="flex items-center gap-x-1 lg:gap-x-2 cursor-pointer px-2 lg:px-4 h-full lg:h-auto py-2 border border-gray-300 rounded-lg"
            onClick={() =>
              setCurrentIndex((currentIndex) =>
                currentIndex < totalPage - 1 ? currentIndex + 1 : currentIndex
              )
            }
          >
            <p className="text-xs lg:text-sm font-semibold">Next</p>
            <FiArrowRight className="text-lg lg:text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ShopItemContainer() {
  const data = tempData;
  const paginatedLength = 10;
  const shopSidebarContext = useContext(ShopSidebarContext);

  return (
    <div className="flex flex-col gap-y-6 lg:gap-y-4">
      <header className="flex items-center gap-x-3 lg:gap-x-0 lg:items-stretch lg:justify-between">
        <div>
          <h5 className="font-bold text-2xl lg:text-3xl">Casual</h5>
        </div>
        <div className="flex gap-x-2 items-center lg:items-end justify-between w-full lg:w-auto">
          <p className="text-gray-400 text-sm lg:text-base mt-2 lg:mt-0">
            Showing 1-{paginatedLength} of {data.length} Products
          </p>
          <button
            className="rounded-full w-9 h-9 bg-gray-200 flex lg:hidden justify-center items-center"
            onClick={shopSidebarContext.toggle}
          >
            <HiOutlineAdjustmentsVertical className="text-xl lg:text-2xl text-black" />
          </button>
          <div className="hidden lg:flex gap-x-1">
            <p>Sort By:</p>
            <div className="font-bold">Most Popular</div>
          </div>
        </div>
      </header>
      <PaginatedDatas
        data={data}
        ContainerComponent={ProductContainer}
        index={0}
        length={paginatedLength}
      />
    </div>
  );
}
