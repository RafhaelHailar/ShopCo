import { FaStar, FaStarHalf } from "react-icons/fa6";
import { Link } from "react-router";
import type { Product } from "types/product";

export default function ProductContainer({ product }: { product: Product }) {
  // rating will be a value from 0 to 100,
  // that's why we have to convert it to a value from 0-5
  const rating = (product.rating / 100) * 5;
  const fullStarTotal = Math.floor(rating);
  const haveHalfStar = fullStarTotal % rating >= 0.5;

  const price = product.price - product.price * product.discount;
  return (
    <div>
      <Link to={"/product/" + product.id}>
        <div className="w-full relative flex items-center justify-center rounded-xl overflow-hidden">
          <img src={product.image} className="w-full" />
        </div>
      </Link>
      <div className="flex flex-col gap-y-1 lg:gap-y-2 mt-4">
        <h5 className="font-bold text-xs lg:text-xl">{product.name}</h5>
        <div className="flex items-center gap-x-1">
          <div className="flex items-center text-xs lg:text-xl gap-x-0.5">
            {new Array(fullStarTotal).fill(null).map((_, i) => (
              <FaStar key={i} className="text-amber-400" />
            ))}
            {haveHalfStar ? <FaStarHalf className="text-amber-400" /> : <></>}
          </div>
          <p className="text-xs lg:text-md mt-1">
            {rating}
            <i className="not-italic text-gray-500">/5</i>
          </p>
        </div>
        <div className="flex gap-x-2">
          <p className="font-bold text-sm lg:text-xl">${price}</p>
          {product.discount > 0 ? (
            <>
              <p className="line-through text-gray-400 font-bold text-sm lg:text-lg">
                ${product.price}
              </p>
              <p className="bg-rose-100 text-rose-500 font-medium text-xs flex justify-center items-center rounded-2xl py-0.5 lg:py-0 px-1 lg:px-3">
                -{product.discount * 100}%
              </p>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
