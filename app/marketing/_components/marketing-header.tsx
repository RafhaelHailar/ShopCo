import { FiSearch } from "react-icons/fi";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { LuCircleUserRound } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";

export default function MarketingHeader() {
  return (
    <section>
      <nav className="py-2 lg:py-4 flex justify-between items-center">
        <div className="flex items-center gap-x-10">
          <ul className="flex items-center gap-x-6">
            <li className="block xl:hidden">
              <a href="#" className="text-3xl font-bold">
                <RxHamburgerMenu />
              </a>
            </li>
            <li>
              <a href="#" className="font-[IntegralCF] font-bold text-3xl">
                SHOP.CO
              </a>
              <div className="h-1"></div>
            </li>
          </ul>
          <ul className="gap-x-6 items-center hidden xl:flex">
            <li>
              <a href="#">Shop</a>
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
        <div className="flex items-center gap-x-6">
          <div className="hidden lg:flex lg:w-96 items-center bg-gray-100 py-3 2xl:w-xl rounded-3xl px-4 gap-x-2">
            <FiSearch className="text-gray-500" />
            <input
              type="text"
              className="text-sm outline-none"
              placeholder="Search for products..."
            />
          </div>
          <ul className="flex gap-x-4 text-xl">
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
      </nav>
    </section>
  );
}
