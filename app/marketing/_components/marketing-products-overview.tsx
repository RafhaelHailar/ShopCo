import type { Product } from "types/product";
import { ProductCategory } from "components/product";
import { tempData } from "~/shop/_lib/data";

export default function MarketingProductsOverview() {
  const newArrivalsData: Product[] = tempData.slice(0, 4);
  return (
    <section className="container-padding">
      <div className="py-14 lg:py-24 flex flex-col gap-y-8 xl:gap-y-12">
        <ProductCategory category="new arrivals" items={newArrivalsData} />
        <div className="xl:px-24">
          <div className="w-full h-0.5 bg-gray-200"></div>
        </div>
        <ProductCategory category="top selling" items={newArrivalsData} />
      </div>
      <div className="px-6 xl:px-16 bg-zinc-100 py-12 xl:py-18">
        <div className="flex justify-center mb-8 xl:mb-16">
          <h2 className="text-3xl w-[250px] lg:w-auto text-center lg:text-5xl">
            BROWSE BY DRESS STYLE
          </h2>
        </div>
        <div className="xl:grid xl:grid-cols-5 flex-col flex gap-4 xl:h-[600px]">
          <div className="w-full xl:h-auto h-[200px] col-span-2 rounded-2xl relative overflow-hidden">
            <img
              src="/images/casual-style.jpg"
              className="absolute top-10 -left-5 scale-200"
            />
            <p className="text-black absolute top-5 left-8 xl:top-10 xl:left-10 text-2xl xl:text-4xl font-bold">
              Casual
            </p>
          </div>
          <div className="w-full xl:h-auto h-[200px] bg-white col-span-3 rounded-2xl relative overflow-hidden">
            <img
              src="/images/formal-style.jpg"
              className="absolute top-15 xl:top-20 left-40 xl:left-80 scale-220 xl:scale-200"
            />
            <p className="text-black absolute top-5 left-8 xl:top-10 xl:left-10 text-2xl xl:text-4xl font-bold">
              Formal
            </p>
          </div>
          <div className="w-full xl:h-auto h-[200px] col-span-3 bg-white rounded-2xl relative overflow-hidden">
            <img
              src="/images/party-style.jpg"
              className="absolute scale-110 -top-10 left-15 lg:-top-35 xl:left-25"
            />
            <p className="text-black absolute top-10 left-10 text-2xl xl:text-4xl font-bold">
              Party
            </p>
          </div>
          <div className="w-full xl:h-auto h-[200px] col-span-2 bg-white rounded-2xl relative overflow-hidden">
            <img
              src="/images/gym-style.jpg"
              className="absolute -top-25 lg:-top-35 left-15 xl:left-27"
            />
            <p className="text-black absolute top-10 left-10 text-2xl xl:text-4xl font-bold">
              Gym
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
