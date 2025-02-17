import type { Product } from "types/product";
import { tempData } from "../_lib/data";
import ProductContainer from "components/product";
import { useMemo, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

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
  const [currentIndex, setCurrentIndex] = useState<number>(index);
  const dataLength = data.length;
  const pointer = currentIndex * length;
  const paginatedData = data.slice(pointer, pointer + length);
  const totalPage = Math.ceil(dataLength / length);
  let pageBtnsValue: (string | number)[] = useMemo(() => {
    if (totalPage > 7) {
      return [1, 2, 3, "...", totalPage - 2, totalPage - 1, totalPage];
    }

    return pageBtnsValue.slice(0, totalPage);
  }, []);

  if (totalPage > 7) {
    if (currentIndex > 2) {
      if (currentIndex < totalPage - 4) {
        pageBtnsValue[3] = currentIndex + 2;
        pageBtnsValue[2] = currentIndex + 1;
        pageBtnsValue[1] = currentIndex;
        pageBtnsValue[0] = currentIndex - 1;
      }
    } else {
      pageBtnsValue[0] = 1;
      pageBtnsValue[1] = 2;
      pageBtnsValue[2] = 3;
    }

    if (totalPage - currentIndex > 5) {
      pageBtnsValue[3] = "...";
    }
  }

  return (
    <div className="flex flex-col gap-y-8">
      <div className="grid grid-cols-3 gap-x-5 gap-y-10">
        {paginatedData.map((data: Product, i: number) => (
          <ContainerComponent key={i} product={data} />
        ))}
      </div>
      <div className="h-0.5 bg-gray-200"></div>
      <div className="flex justify-between">
        <div>
          <button
            className="flex items-center gap-x-2 cursor-pointer px-4 py-2 border border-gray-300 rounded-lg"
            onClick={() =>
              setCurrentIndex((currentIndex) =>
                currentIndex > 0 ? currentIndex - 1 : currentIndex
              )
            }
          >
            <FiArrowLeft className="text-xl" />
            <p className="text-sm font-semibold">Previous</p>
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
                className="font-semibold px-3 py-2 cursor-pointer w-10 h-10 flex items-center justify-center rounded-lg text-sm"
              >
                {value}
              </button>
            );
          })}
        </div>
        <div>
          <button
            className="cursor-pointer px-4 py-2 border flex items-center border-gray-300 rounded-lg gap-x-2"
            onClick={() =>
              setCurrentIndex((currentIndex) =>
                currentIndex < totalPage - 1 ? currentIndex + 1 : currentIndex
              )
            }
          >
            <p className="text-sm font-semibold">Next</p>
            <FiArrowRight className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ShopItemContainer() {
  const data = tempData;

  return (
    <div className="flex flex-col gap-y-4">
      <header className="flex justify-between">
        <div>
          <h5 className="font-bold text-3xl">Casual</h5>
        </div>
        <div className="flex">
          <p className="text-gray-400">Showing 1-10 of 100 Products</p>
          <div className="flex">
            <p>Sort By</p>
            <div className="font-bold">Most Popular</div>
          </div>
        </div>
      </header>
      <PaginatedDatas
        data={data}
        ContainerComponent={ProductContainer}
        index={0}
        length={10}
      />
    </div>
  );
}
