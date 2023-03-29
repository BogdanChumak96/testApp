import React from "react";
import { BiXCircle } from "react-icons/bi";
import { useAppDispatch } from "../../services/hooks";
import { removeFromFavorites } from "../../store/productSlice";

export const CartItem = ({ product }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="border-gray-300 border-2 relative  flex items-center min-w-full">
      <img
        className="w-1/6 text-center radius-xl"
        width={80}
        src={product.images[0]}
        alt=""
      />
      <h4 className="w-1/6 text-center">{product.id}</h4>
      <h3 className="w-1/6 text-center">{product.title}</h3>
      <h3 className="w-1/6 text-center">{product.description}</h3>
      <h3 className="w-1/6 text-center">{product.rating}</h3>
      <h3 className="w-1/6 text-center">{product.category}</h3>
      <h3 className="w-1/6 text-center">{product.stock}</h3>
      <BiXCircle
        className="transform cursor-pointer hover:scale-125 transition-all duration-300 "
        onClick={() => dispatch(removeFromFavorites(product.id))}
        size={30}
      />
    </div>
  );
};
