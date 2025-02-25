import type { CartItem } from "types/cart";
import MyCartItem from "./my-cart-item";
import { tempData } from "~/shop/_lib/data";
import React, { useState } from "react";
import MyCartSummary from "./my-cart-summary";
import useCart from "hooks/cart";
import { Link } from "react-router";

export default function MyCartContainer() {
  const cart = useCart();
  const productData = tempData;
  const cartItemsData = cart.get();

  // use for updating the cart container
  // I don't know what's the best way to rerender the cart,
  // when we remove an item in cart using this cart hook setup.
  const [_, setToRerender] = useState<number>(-1);

  return (
    <div>
      <h2 className="text-4xl lg:text-5xl">YOUR CART</h2>
      <div className="flex mt-8 gap-5 flex-col lg:flex-row">
        <div className="w-full h-[30rem] overflow-auto px-4 lg:px-5 py-3 lg:py-4 border border-gray-200 rounded-2xl ">
          <ul className="flex flex-col gap-y-4 lg:gap-y-5">
            {cartItemsData.length > 0 ? (
              cartItemsData.map((item: CartItem, i) => {
                return (
                  <React.Fragment key={i}>
                    <MyCartItem
                      rerenderCart={() => setToRerender((v) => v * -1)}
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
              })
            ) : (
              <div className="flex flex-col gap-y-3">
                <h5 className="font-bold text-2xl">
                  Your cart is empty... for now!
                </h5>
                <p className="text-gray-500">
                  Let’s fix that—check out our latest deals.
                </p>
                <div>
                  <Link to="/shop">
                    <button className="bg-black text-white px-14 py-2 rounded-4xl cursor-pointer">
                      Shop
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </ul>
        </div>
        <div className="lg:w-10/12">
          <MyCartSummary productData={productData} cartDatas={cartItemsData} />
        </div>
      </div>
    </div>
  );
}
