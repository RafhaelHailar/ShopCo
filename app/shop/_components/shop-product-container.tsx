import type { Product } from "types/product";

const tempData: Product[] = [
  {
    id: 0,
    image: "/images/t-shirt-with-tape-details.jpg",
    name: "T-shirt with Tape Details",
    rating: 60,
    price: 120,
    discount: 0,
  },
  {
    id: 1,
    image: "/images/t-shirt-with-tape-details.jpg",
    name: "Skinny Fit Jeans",
    rating: 90,
    price: 120,
    discount: 0.2,
  },
  {
    id: 2,
    image: "/images/t-shirt-with-tape-details.jpg",
    name: "Checkered Shirt",
    rating: 90,
    price: 180,
    discount: 0,
  },
  {
    id: 3,
    image: "/images/t-shirt-with-tape-details.jpg",
    name: "Sleeve Striped T-shirt",
    rating: 90,
    price: 120,
    discount: 0.3,
  },
];

export default function ShopItemContainer() {
  return (
    <div>
      <header className="flex justify-between">
        <div>
          <h5 className="font-bold text-3xl">Casual</h5>
        </div>
        <div className="flex">
          <p className="text-gray-400">Showing 1-10 of 100 Products</p>
          <div className="flex">
            <p>Sort By</p>
            <div className="font-bold">Most Popular</div>
          </div>
        </div>
      </header>
      <div> </div>
    </div>
  );
}
