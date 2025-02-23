import { useEffect, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

interface QuantityModifierProps {
  onChangeEvent?: (quantity: number) => void;
}

export function QuantityModifier({
  onChangeEvent = () => null,
}: QuantityModifierProps) {
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    onChangeEvent(quantity);
  }, [quantity]);

  return (
    <div>
      <div className="flex items-center bg-stone-100 rounded-4xl overflow-hidden py-3">
        <button
          className="cursor-pointer h-full pl-5 xl:pr-2"
          onClick={() => setQuantity((q) => (q > 1 ? q - 1 : q))}
        >
          <FiMinus />
        </button>
        <input
          type="number"
          disabled
          className="text-center w-full"
          value={quantity}
        />
        <button
          className="cursor-pointer h-full pr-5"
          onClick={() => setQuantity((q) => q + 1)}
        >
          <FiPlus />
        </button>
      </div>
    </div>
  );
}
