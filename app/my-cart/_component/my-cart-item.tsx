import { QuantityModifier } from "components/transaction";
import type { CartItem } from "types/cart";
import type { Product } from "types/product";
import { PiTrashFill } from "react-icons/pi";
import { useEffect, useState } from "react";
import { GetColorName } from "hex-color-to-color-name";
import useCart from "hooks/cart";

interface MyCartItemProps {
  rerenderCart: () => void;
  productData: Product;
  cartData: CartItem;
}

export default function MyCartItem({
  rerenderCart,
  productData,
  cartData,
}: MyCartItemProps) {
  const cart = useCart();
  const [quantity, setQuantity] = useState(cartData.quantity);

  return (
    <li className="flex gap-x-4">
      <div className="flex items-center">
        <div className="overflow-hidden w-28 lg:w-32 rounded-2xl h-30 flex items-center">
          <img src={productData.image} className="w-full" />
        </div>
      </div>
      <div className="w-full flex justify-between">
        <div className="w-full flex flex-col justify-between">
          <div>
            <h5 className="font-bold lg:text-lg">{productData.name}</h5>
            <p className="text-sm">
              Size:{" "}
              <span className="text-gray-500">
                {cartData.productOption.size}
              </span>
            </p>
            <p className="text-sm">
              Color:{" "}
              <span className="text-gray-500">
                {GetColorName(cartData.productOption.color.slice(1))}
              </span>
            </p>
          </div>
          <p className="font-bold sm:text-xl">
            ${productData.price * quantity}
          </p>
        </div>
        <div className="flex flex-col justify-between items-end w-2/12 lg:w-full relative">
          <div>
            <button
              className="cursor-pointer"
              onClick={() => {
                cart.remove(cartData.id);
                rerenderCart();
              }}
            >
              <PiTrashFill className="text-red-500 text-2xl" />
            </button>
          </div>
          <div className="w-[6rem] xl:w-6/12 absolute lg:static bottom-0 right-0">
            <QuantityModifier
              onChangeEvent={(q) => setQuantity(q)}
              className="py-1 text-sm lg:text-base"
            />
          </div>
        </div>
      </div>
    </li>
  );
}
