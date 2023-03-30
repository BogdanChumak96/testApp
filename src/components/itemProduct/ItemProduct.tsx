import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import { addToFavorites, deleteById } from "../../store/productSlice";
import { useAppDispatch } from "../../services/hooks";
import { RiDeleteBin2Line } from "react-icons/ri";
import { useMutation } from "react-query";
import { productService } from "../../services/product";

export const ItemProduct = ({ product }: any): JSX.Element => {
  const deleteProductMutation = useMutation(productService.deleteById, {
    onSuccess: () => {},
  });
  const handleDeleteItem = async (id) => {
    await deleteProductMutation.mutate(id);
    dispatch(deleteById(id));
  };
  const dispatch = useAppDispatch();
  return (
    <div
      className="rounded-2xl
        flex
        justify-between
        flex-col 
        text-center 
        mx-auto 
        my-4
        px-20
        py-10
        w-4/5
        relative
        items-center 
        bg-white 
        border-solid 
        border-1
      border-sky-500 
        hover:-translate-y-2 
        transition ease-in-out delay-150
        hover:shadow-lg
        cursor-pointer"
    >
      <RiDeleteBin2Line
        size={35}
        onClick={() => {
          handleDeleteItem(product.id);
        }}
        className="absolute cursor-pointer text-black transform hover:scale-125 transition-all duration-300 hover:text-red-500  top-30 right-10"
      />
      <Link to={`product/${product.id}`}>
        <h2 className="font-bold">{product.title.toUpperCase()}</h2>
        <img
          className="mx-auto mb-5  rounded-xl"
          width={200}
          height={200}
          src={product.images[0]}
        />
        <p className="italic font-md">{product.description}</p>
      </Link>

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
