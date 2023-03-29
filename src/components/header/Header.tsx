import { useEffect, useState } from "react";
import { AddProduct } from "../../pages/addProduct/AddProduct";
import { Link } from "react-router-dom";
import {
  BiHomeAlt2,
  BiAddToQueue,
  BiCartAlt,
  BiChevronUp,
  BiChevronDown,
} from "react-icons/bi";
import { RxLetterCaseCapitalize, RxLetterCaseLowercase } from "react-icons/rx";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import {
  setFilterValue,
  setSortValue,
  clearCart,
  selectSortedItems,
  setCategory,
} from "../../store/productSlice";
const Header = () => {
  const dispatch = useAppDispatch();
  const visibleInput = useAppSelector((state) => state.product.showInput);

  const handleSortChange = (sortVal) => {
    dispatch(setSortValue(sortVal));
  };

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
        <div className="flex flex-col">
          <div className="flex flex-col items-center justify-center align-center">
            <span className="mb-1">Category</span>
            <div className="flex gap-2">
              <select onChange={(e) => dispatch(setCategory(e.target.value))}>
                <option value="All">All</option>
                <option value="fragrances">fragrances</option>
                <option value="groceries">groceries</option>
                <option value="home-decoration">home-decoration</option>
                <option value="smartphones">smartphones</option>
                <option value="laptops">laptops</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <span>Sort</span>
            <div className="flex gap-2">
              <BiChevronUp
                onClick={() => handleSortChange("PRICE_ASC")}
                size={32}
              />
              <BiChevronDown
                onClick={() => handleSortChange("PRICE_DESC")}
                size={32}
              />
              <RxLetterCaseCapitalize
                onClick={() => handleSortChange("ALPHABETICAL_ASC")}
                size={22}
              />
              <RxLetterCaseLowercase
                onClick={() => handleSortChange("ALPHABETICAL_DECS")}
                size={22}
              />
            </div>
          </div>
        </div>
      )}
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
            w-1/4
            items-start
            justify-center
          bg-white 
            rounded-lg 
            shadow-md 
            lg:mx-20
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
