import { Link } from "react-router";

export default function MarketingHeader() {
  return (
    <section className="bg-[#F0F0F0]">
      <div>
        <div className="flex flex-wrap 2xl:flex-nowrap">
          <div className="px-6 lg:pl-24 xl:max-w-[800px] w-full flex flex-col gap-y-6 pt-8 lg:pt-18 pb-26">
            <h1 className="text-4xl lg:text-6xl lg:max-w-[600px]">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="text-gray-500 text-sm lg:text-lg lg:max-w-[600px] w-full">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <div>
              <Link to="/shop">
                <button className="min-w-full md:min-w-0 bg-black text-white px-16 cursor-pointer py-3 rounded-4xl">
                  Shop Now
                </button>
              </Link>
            </div>
            <div className="flex pl-3 md:pl-0 h-18 lg:mt-12 gap-x-4 sm:gap-x-14  md:gap-x-15 lg:gap-x-24 gap-y-4 lg:gap-y-8 xl:gap-x-11 justify-center xl:justify-start flex-wrap xl:flex-nowrap">
              <div className="flex items-center justify-center">
                <div>
                  <h3 className="text-xl lg:text-4xl font-bold">200+</h3>
                  <p className="text-xs lg:text-base text-gray-500">
                    International Brands
                  </p>
                </div>
              </div>
              <div className="max-w-0.5 w-full">
                <div className="h-full bg-gray-200 w-full"></div>
              </div>
              <div className="flex items-center">
                <div>
                  <h3 className="text-xl lg:text-4xl font-bold">2,000 +</h3>
                  <p className="text-xs lg:text-base text-gray-500">
                    High-Quality Products
                  </p>
                </div>
              </div>
              <div className="max-w-0.5 w-full sm:block hidden">
                <div className="h-full bg-gray-200 w-full"></div>
              </div>
              <div className="flex items-center">
                <div>
                  <h3 className="text-xl lg:text-4xl font-bold">30,000 +</h3>
                  <p className="text-xs lg:text-base text-gray-500">
                    Happy Customers
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[400px] lg:h-[700px] overflow-hidden">
            <div className="relative">
              <img
                src="/images/four-pointed-star.svg"
                className="absolute end-8 lg:end-25 top-10 lg:top-25 w-18 lg:w-auto"
              />
              <img
                src="/images/four-pointed-star.svg"
                className="absolute left-10 lg:left-25 2xl:left-0 top-45 lg:top-85 w-10 lg:w-14"
              />
              <img
                src="/images/header-image.jpg"
                className="w-full -mt-10 xl:-ml-10"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-white container-padding flex lg:justify-between py-8 flex-wrap gap-y-10 gap-x-5 lg:gap-x-0 justify-center">
        <div className="flex items-center">
          <img src="/partners/versace.svg" className="lg:w-[200px] w-[100px]" />
        </div>
        <div className="flex items-center">
          <img src="/partners/zara.svg" className="lg:w-[110px] w-[55px]" />
        </div>
        <div className="flex items-center">
          <img src="/partners/gucci.svg" className="lg:w-[210px] w-[110px]" />
        </div>
        <div className="flex items-center">
          <img src="/partners/prada.svg" className="lg:w-[220px] w-[110px]" />
        </div>
        <div className="flex items-center">
          <img
            src="/partners/calvin-klein.svg"
            className="lg:w-[220px] w-[120px]"
          />
        </div>
      </div>
    </section>
  );
}
