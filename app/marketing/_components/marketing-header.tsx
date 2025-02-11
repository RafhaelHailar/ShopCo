import { FiSearch } from "react-icons/fi";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { LuCircleUserRound } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";

export default function MarketingHeader() {
  return (
    <section className="bg-stone-100">
      <nav className="py-2 lg:py-4 flex justify-between items-center px-6 lg:px-24 bg-white">
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
      <div>
        <div className="flex px-6 lg:px-24 gap-x-12 gap-y-2 lg:gap-y-12 flex-wrap xl:flex-nowrap">
          <div className="xl:max-w-[800px] w-full flex flex-col gap-y-6 pt-8 lg:pt-18 pb-26">
            <h1 className="font-[IntegralCF] text-4xl lg:text-6xl lg:max-w-[600px]">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="text-gray-500 text-sm lg:text-lg lg:max-w-[600px] w-full">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <div>
              <button className="min-w-full xl:min-w-0 bg-black text-white px-16 cursor-pointer py-3 rounded-4xl">
                Shop Now
              </button>
            </div>
            <div className="flex h-18 lg:mt-12 gap-x-5 lg:gap-x-26 gap-y-4 lg:gap-y-8 xl:gap-x-11 justify-center xl:justify-start flex-wrap xl:flex-nowrap">
              <div className="flex items-center">
                <div>
                  <h3 className="text-2xl lg:text-4xl font-bold">200+</h3>
                  <p className="text-sm lg:text-md text-gray-500">
                    International Brands
                  </p>
                </div>
              </div>
              <div className="max-w-0.5 w-full">
                <div className="h-full bg-gray-200 w-full"></div>
              </div>
              <div className="flex items-center">
                <div>
                  <h3 className="text-2xl lg:text-4xl font-bold">2,000 +</h3>
                  <p className="text-sm lg:text-md text-gray-500">
                    High-Quality Products
                  </p>
                </div>
              </div>
              <div className="max-w-0.5 w-full hidden xl:block">
                <div className="h-full bg-gray-200 w-full"></div>
              </div>
              <div className="flex items-center">
                <div className="">
                  <h3 className="text-2xl lg:text-4xl font-bold">30,000 +</h3>
                  <p className="text-sm lg:text-md text-gray-500">
                    Happy Customers
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex min-h-[800px] xl:min-h-0">
            <div className="w-full bg-gray-500 h-full"></div>
          </div>
        </div>
      </div>
      <div className="bg-black text-white px-6 lg:px-24"></div>
    </section>
  );
}
