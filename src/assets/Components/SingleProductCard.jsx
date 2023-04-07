import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const SingleProductCard = ({ product }) => {
  const { name, price, ratings, img, seller, category } = product;
  return (
    <div className="border rounded-lg p-4 shadow-sm shadow-indigo-100">
      <img
        alt="Home"
        src={img}
        className="h-56 w-full rounded-md object-cover"
      />

      <div className="mt-2 flex-col justify-center items-center">
        <div>
          <p className="text-xs text-gray-500 flex justify-center mb-2 gap-4">
            <p className="text-gray-500"> {seller} </p>
            <p className="font-medium flex gap-2 items-center">
              {ratings}
              <StarIcon className="w-4 h-4 text-yellow-400"></StarIcon>
            </p>
            <span className="font-bold"> Price : $ {price}</span>
          </p>
        </div>
        <div>
          <p className="font-medium">{name}</p>
        </div>
        <div className="sm:inline-flex sm:shrink-0 sm:items-center lg:flex lg:justify-around mt-6 text-xs sm:gap-2">
          <div className="mt-1.5 sm:mt-0 text-left">
            <p className="text-gray-500">Category</p>

            <p className="font-medium">{category}</p>
          </div>

          <div className="flex gap-4">
            <button className="mx-auto p-4 border rounded-full hover:bg-green-400 hover:text-white duration-300">
              Go
            </button>
            <button className="mx-auto p-4 border rounded-full hover:bg-green-400 hover:text-white duration-300">
              <FontAwesomeIcon icon={faCartShopping} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;
