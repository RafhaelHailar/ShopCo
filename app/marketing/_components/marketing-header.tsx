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
        <div className="flex  px-6 lg:px-24 gap-12 flex-wrap xl:flex-nowrap">
          <div className="xl:max-w-[800px] w-full flex flex-col gap-y-6 pt-18 pb-26">
            <h1 className="font-[IntegralCF] text-6xl lg:max-w-[600px]">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="text-gray-500 text-lg lg:max-w-[600px] xl:max-w-none w-full">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <div>
              <button className="min-w-full xl:min-w-0 bg-black text-white px-16 cursor-pointer py-3 rounded-4xl">
                Shop Now
              </button>
            </div>
            <div className="flex h-18 lg:mt-12 gap-x-6 gap-y-8 xl:gap-x-8 flex-wrap xl:flex-nowrap justify-center">
              <div className="w-full max-w-5/12 xl:max-w-[180px] 2xl:max-w-[170px] shadow-[2px_0_0_0_#e5e7eb] flex items-center justify-center 2xl:justify-start">
                <div>
                  <h3 className="text-4xl font-bold">200+</h3>
                  <p className="text-gray-500">International Brands</p>
                </div>
              </div>
              <div className="w-full max-w-5/12 xl:max-w-[180px] xl:shadow-[2px_0_0_0_#e5e7eb] flex items-center justify-center xl:justify-start">
                <div>
                  <h3 className="text-4xl font-bold">2,000 +</h3>
                  <p className="text-gray-500">High-Quality Products</p>
                </div>
              </div>
              <div className="w-full xl:max-w-[180px] flex items-center justify-center xl:justify-start">
                <div className="">
                  <h3 className="text-4xl font-bold">30,000 +</h3>
                  <p className="text-gray-500">Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex min-h-[800px] xl:min-h-0">
            <div className="w-full bg-gray-500 h-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
