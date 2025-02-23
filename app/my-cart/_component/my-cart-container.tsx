import type { CartItem } from "types/cart";
import { dummyCart } from "../_lib/data";
import MyCartItem from "./my-cart-item";
import { tempData } from "~/shop/_lib/data";
import React from "react";

export default function MyCartContainer() {
  const productData = tempData;
  const cartItemsData = dummyCart;
  return (
    <div>
      <h2 className="text-5xl">YOUR CART</h2>
      <div className="flex mt-8">
        <div className="w-full h-[30rem] overflow-auto  px-5 py-4 border border-gray-200 rounded-2xl ">
          <ul className="flex flex-col gap-y-5">
            {cartItemsData.map((item: CartItem, i) => {
              return (
                <React.Fragment key={i}>
                  <MyCartItem
                    productData={productData[item.productId]}
                    cartData={item}
                  />
                  {i < cartItemsData.length - 1 && (
                    <li>
                      <div className="h-0.5 bg-gray-100"></div>
                    </li>
                  )}
                </React.Fragment>
              );
            })}
          </ul>
        </div>
        <div className="w-10/12"></div>
      </div>
    </div>
  );
}
