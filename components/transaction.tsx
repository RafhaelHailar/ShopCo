import { useEffect, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { twMerge } from "tailwind-merge";

interface QuantityModifierProps {
  onChangeEvent?: (quantity: number) => void;
  className?: string;
}

export function QuantityModifier({
  onChangeEvent = () => null,
  className,
}: QuantityModifierProps) {
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    onChangeEvent(quantity);
  }, [quantity]);

  return (
    <div>
      <div
        className={twMerge(
          "flex items-center bg-stone-100 rounded-4xl overflow-hidden py-3",
          className
        )}
      >
        <button
          className="cursor-pointer h-full pl-5 lg:pr-2"
          onClick={() => setQuantity((q) => (q > 1 ? q - 1 : q))}
          type="button"
        >
          <FiMinus />
        </button>
        <input
          type="number"
          name="quantity"
          readOnly
          className="text-center w-full"
          value={quantity}
        />
        <button
          className="cursor-pointer h-full pr-5"
          onClick={() => setQuantity((q) => q + 1)}
          type="button"
        >
          <FiPlus />
        </button>
      </div>
    </div>
  );
}
