import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import { addToFavorites } from "../../store/productSlice";
import { useAppDispatch } from "../../services/hooks";

type Props = {};

export const FullItem = ({ product }: any): JSX.Element => {
  const dispatch = useAppDispatch();
  return (
    <div
      className="rounded-2xl
        flex
        justify-between
        flex-col 
        text-center 
        mx-auto 
        px-10
        py-20
        mt-10
        items-center 
        bg-white 
      hover:shadow-lg
        lg:w-1/2"
    >
      <h2 className="font-bold">{product.title.toUpperCase()}</h2>
      <img
        className="mx-auto mb-5  rounded-xl"
        width={400}
        height={400}
        src={product.images[0]}
      />
      <p className="italic">{product.description}</p>
      <div className="flex items-center">
        <h5 className="font-bold">{product.price}$</h5>
        <BiPlus
          onClick={() => dispatch(addToFavorites(product))}
          className="hover:bg-gray-400 rounded-md ml-3 transition ease-in-out delay-150 cursor-pointer"
          size={30}
        />
      </div>
    </div>
  );
};
