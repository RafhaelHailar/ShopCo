import { QuantityModifier } from "components/transaction";
import type { CartItem } from "types/cart";
import type { Product } from "types/product";
import { PiTrashFill } from "react-icons/pi";
import { useState } from "react";

interface MyCartItemProps {
  productData: Product;
  cartData: CartItem;
}

export default function MyCartItem({ productData, cartData }: MyCartItemProps) {
  const [quantity, setQuantity] = useState(cartData.quantity);
  return (
    <li className="flex gap-x-4">
      <div className="overflow-hidden w-32 rounded-2xl h-30 flex items-center">
        <img src={productData.image} className="w-full" />
      </div>
      <div className="w-full flex justify-between">
        <div className="flex flex-col justify-between">
          <div>
            <h5 className="font-bold text-lg">{productData.name}</h5>
            <p>
              Size:{" "}
              <span className="text-gray-500">
                {cartData.productOption.size}
              </span>
            </p>
            <p>
              Color:{" "}
              <span className="text-gray-500">
                {cartData.productOption.color}
              </span>
            </p>
          </div>
          <p className="font-bold text-xl">${productData.price * quantity}</p>
        </div>
        <div className="flex flex-col justify-between items-end">
          <div>
            <button className="cursor-pointer">
              <PiTrashFill className="text-red-500 text-2xl" />
            </button>
          </div>
          <div className="w-6/12">
            <QuantityModifier onChangeEvent={(q) => setQuantity(q)} />
          </div>
        </div>
      </div>
    </li>
  );
}
