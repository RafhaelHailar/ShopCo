import { FiSearch } from "react-icons/fi";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { LuCircleUserRound } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router";
import type { ReactNode } from "react";
import type { Route } from "types/route";
import { RiArrowRightSLine } from "react-icons/ri";

export function RouteHistoryDisplay({
  routes,
  children,
}: {
  routes: Route[];
  children: ReactNode;
}) {
  return (
    <div className="pb-20">
      <div className="bg-gray-200 w-full h-0.5 px-4"></div>
      <div className="container-padding py-6 flex flex-col gap-y-2 lg:gap-y-6">
        <ul className="flex items-center gap-x-1">
          {routes.map((route: Route, i: number) => {
            return (
              <>
                <li>
                  <Link to={route.path} className="text-gray-500">
                    {route.name}
                  </Link>
                </li>
                {i < routes.length - 1 && (
                  <li>
                    <RiArrowRightSLine className="mt-0.5 text-lg text-gray-600 font-black" />
                  </li>
                )}
              </>
            );
          })}
        </ul>
        {children}
      </div>
    </div>
  );
}

export default function Navbar() {
  return (
    <nav>
      <div className="bg-black text-white text-center w-full">
        <p className="text-sm font-light py-2">
          Sign up and get 20% off to your first order.&nbsp;
          <a href="#" className="underline underline-offset-4">
            Sign Up Now
          </a>
        </p>
      </div>
      <div className="py-2 lg:py-6 flex justify-between items-center container-padding bg-white">
        <div className="flex items-center gap-x-12">
          <ul className="flex items-center gap-x-6">
            <li className="block xl:hidden">
              <a href="#" className="text-3xl font-bold">
                <RxHamburgerMenu />
              </a>
            </li>
            <li className="-mt-2">
              <Link to="/" className="font-bold text-4xl">
                <h2>SHOP.CO</h2>
              </Link>
              <div className="h-1"></div>
            </li>
          </ul>
          <ul className="gap-x-8 items-center hidden xl:flex">
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <a href="#">On Sale</a>
            </li>
            <li>
              <a href="#">New Arrivals</a>
            </li>
            <li>
              <a href="#">Brands</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-x-12">
          <div className="hidden lg:flex lg:w-96 items-center bg-gray-100 py-3 2xl:w-xl rounded-3xl px-4 gap-x-3">
            <FiSearch className="text-gray-500 text-2xl" />
            <input
              type="text"
              className="outline-none"
              placeholder="Search for products..."
            />
          </div>
          <ul className="flex gap-x-4 text-3xl">
            <li className="block lg:hidden">
              <a href="#">
                <FiSearch />
              </a>
            </li>
            <li>
              <a href="#">
                <PiShoppingCartSimpleBold />
              </a>
            </li>
            <li>
              <a href="#">
                <LuCircleUserRound />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
