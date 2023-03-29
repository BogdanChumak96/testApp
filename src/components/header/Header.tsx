import { useEffect, useState } from "react";
import { AddProduct } from "../../pages/addProduct/AddProduct";
import { Link } from "react-router-dom";
import { BiHomeAlt2, BiAddToQueue, BiCartAlt } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import {
  setFilterValue,
  selectFilteredItems,
  clearCart,
} from "../../store/productSlice";
const Header = () => {
  const dispatch = useAppDispatch();
  const visibleInput = useAppSelector((state) => state.product.showInput);

  const handleFilterChange = (event) => {
    dispatch(setFilterValue(event.target.value));
  };

  return (
    <div
      className="
        w-4/5 
        py-5
        sticky
        top-0 
        z-20
        rounded-b-2xl 
        flex 
        mx-auto
        items-center 
        align-center
        justify-center
        gap-4
        shadow-xl
      bg-gray-300"
    >
      {visibleInput && (
        <input
          onChange={handleFilterChange}
          type="email"
          id="email"
          name="email"
          placeholder="Enter item name"
          className="
            flex 
            flex-col
            w-1/3
            items-start
            justify-center
          bg-white 
            rounded-lg 
            shadow-md 
            px-4 
            py-2
            w-full
            py-2 
            px-3 
            rounded-lg 
            border
           border-gray-200
             focus:outline-none
             duration-150
             ease-in-out
             "
        />
      )}
      <Link to="/">
        <BiHomeAlt2 size={40} />
      </Link>
      <Link to="/cart">
        <BiCartAlt size={40} />
      </Link>
      <Link to="/add">
        <BiAddToQueue size={40} />
      </Link>
      <button onClick={() => dispatch(clearCart())}>clear</button>
    </div>
  );
};

export default Header;
