import VersaceLogo from "/partners/versace.svg";
import ZaraLogo from "/partners/zara.svg";
import GucciLogo from "/partners/gucci.svg";
import PradaLogo from "/partners/prada.svg";
import CalvinKleinLogo from "/partners/calvin-klein.svg";

export default function MarketingHeader() {
  return (
    <section className="bg-stone-100">
      <div>
        <div className="flex xl:px-24 gap-x-12 flex-wrap xl:flex-nowrap">
          <div className="px-6 lg:px-24 xl:px-0 xl:max-w-[800px] w-full flex flex-col gap-y-6 pt-8 lg:pt-18 pb-26">
            <h1 className="text-4xl lg:text-6xl lg:max-w-[600px]">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="text-gray-500 text-sm lg:text-lg lg:max-w-[600px] w-full">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <div>
              <button className="min-w-full md:min-w-0 bg-black text-white px-16 cursor-pointer py-3 rounded-4xl">
                Shop Now
              </button>
            </div>
            <div className="flex pl-3 md:pl-0 h-18 lg:mt-12 gap-x-4 sm:gap-x-14  md:gap-x-15 lg:gap-x-24 gap-y-4 lg:gap-y-8 xl:gap-x-11 justify-center xl:justify-start flex-wrap xl:flex-nowrap">
              <div className="flex items-center justify-center">
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
              <div className="max-w-0.5 w-full sm:block hidden">
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
      <div className="bg-black text-white px-6 lg:px-24 flex lg:justify-between py-8 flex-wrap gap-y-10 gap-x-5 lg:gap-x-0 justify-center">
        <div className="flex items-center">
          <img src={VersaceLogo} className="lg:w-[200px] w-[100px]" />
        </div>
        <div className="flex items-center">
          <img src={ZaraLogo} className="lg:w-[110px] w-[55px]" />
        </div>
        <div className="flex items-center">
          <img src={GucciLogo} className="lg:w-[210px] w-[110px]" />
        </div>
        <div className="flex items-center">
          <img src={PradaLogo} className="lg:w-[220px] w-[110px]" />
        </div>
        <div className="flex items-center">
          <img src={CalvinKleinLogo} className="lg:w-[220px] w-[120px]" />
        </div>
      </div>
    </section>
  );
}
