import React, { useState } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

interface DropDownTriggerProps {
  isOpen: boolean;
  className?: string;
  selectedValue: string;
  isOpenSetter: React.Dispatch<React.SetStateAction<boolean>>;
}

function DropDownTrigger({
  isOpen,
  className,
  selectedValue,
  isOpenSetter,
}: DropDownTriggerProps) {
  return (
    <button
      className={
        className
          ? className
          : "px-5 py-2 bg-gray-200 cursor-pointer rounded-4xl relative z-10"
      }
      onClick={() => isOpenSetter((v) => !v)}
    >
      <div className="flex items-center gap-x-3 font-semibold">
        <p>{selectedValue}</p>
        {isOpen ? (
          <RiArrowUpSLine className="text-xl" />
        ) : (
          <RiArrowDownSLine className="text-xl" />
        )}
      </div>
    </button>
  );
}

interface DropDownItemsProps {
  open: boolean;
  className?: string;
  items: string[];
  selectedItemSetter: React.Dispatch<React.SetStateAction<number>>;
  isOpenSetter: React.Dispatch<React.SetStateAction<boolean>>;
}

function DropDownItems({
  open,
  className,
  items,
  selectedItemSetter,
  isOpenSetter,
}: DropDownItemsProps) {
  return (
    <>
      {open && (
        <div
          className={
            "absolute w-full top-5 pt-8" +
            (className ? className : " bg-gray-100")
          }
        >
          <ul className="flex flex-col">
            {items.map((item: string, i) => {
              return (
                <React.Fragment key={i}>
                  <li className="flex justify-center">
                    <button
                      className="py-2 hover:bg-gray-200 w-full cursor-pointer"
                      onClick={() => {
                        selectedItemSetter(i);
                        isOpenSetter(false);
                      }}
                    >
                      {item}
                    </button>
                  </li>
                </React.Fragment>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}

interface DropDownProps {
  items: string[];
  active?: number;
  triggerClassname?: string;
  itemsContainerClassName?: string;
}

export default function DropDown({
  items,
  active = 0,
  triggerClassname,
  itemsContainerClassName,
}: DropDownProps) {
  const [selectedItemIdx, setSelectedItemIdx] = useState(active);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <DropDownTrigger
        isOpen={isOpen}
        className={triggerClassname}
        selectedValue={items[selectedItemIdx]}
        isOpenSetter={setIsOpen}
      />
      <DropDownItems
        open={isOpen}
        items={items}
        className={itemsContainerClassName}
        selectedItemSetter={setSelectedItemIdx}
        isOpenSetter={setIsOpen}
      />
    </div>
  );
}
