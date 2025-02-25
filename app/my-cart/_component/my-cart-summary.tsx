import Input from "components/input";
import { PiTag } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa6";
import type { Product } from "types/product";
import type { CartItem } from "types/cart";

interface MyCartSummaryProps {
  productData: Product[];
  cartDatas: CartItem[];
}

export default function MyCartSummary({
  productData,
  cartDatas,
}: MyCartSummaryProps) {
  let subtotalWithoutDiscount = 0;
  let subtotalWithDiscount = 0;
  let discount = 0;
  let deliveryFee = 15;
  let total = 15;

  for (let i = 0; i < cartDatas.length; i++) {
    const data = cartDatas[i];
    const product = productData[data.productId];

    subtotalWithoutDiscount += product.price * data.quantity;
    subtotalWithDiscount +=
      (product.price - product.price * product.discount) * data.quantity;
  }

  total = subtotalWithDiscount + deliveryFee;
  discount = subtotalWithoutDiscount
    ? 1 - subtotalWithDiscount / subtotalWithoutDiscount
    : 0;

  return (
    <div className="border border-gray-200 rounded-2xl px-5 pt-4 pb-10">
      <div className="flex flex-col gap-y-6">
        <h4 className="font-bold text-2xl">Order Summary</h4>
        <ul className="flex flex-col gap-y-4">
          <li className="flex justify-between">
            <p className="text-lg text-gray-500">Subtotal</p>
            <p className="font-bold text-xl">${subtotalWithoutDiscount}</p>
          </li>
          <li className="flex justify-between">
            <p className="text-lg text-gray-500">
              Discount(-{(discount * 100).toFixed(1)}%)
            </p>
            <p className="font-bold text-xl text-red-500">
              -${discount * subtotalWithoutDiscount}
            </p>
          </li>
          <li className="flex justify-between">
            <p className="text-lg text-gray-500">Delivery Fee</p>
            <p className="font-bold text-xl">${deliveryFee}</p>
          </li>
          <li className="">
            <div className="bg-gray-100 h-0.5"></div>
          </li>
          <li className="flex justify-between">
            <p className="text-lg">Total</p>
            <p className="font-bold text-xl">${total}</p>
          </li>
        </ul>
        <div className="flex flex-col gap-y-6">
          <div className="flex gap-x-3">
            <div className="w-full">
              <Input
                icon={<PiTag className="text-xl text-gray-500 font-bold" />}
                className="w-text-sm"
                placeholder="Add promo code"
              />
            </div>
            <button className="text-sm lg:text-base bg-black text-white px-7 lg:px-10 py-2 rounded-4xl">
              Apply
            </button>
          </div>

          <button className="w-full bg-black text-white rounded-4xl py-4 flex justify-center items-center gap-x-4 cursor-pointer">
            <p className="font-semibold">Go to Checkout</p>
            <FaArrowRight className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
