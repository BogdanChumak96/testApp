import { useAppDispatch } from "../../services/hooks";
import { CartItem } from "../cartItem/CartItem";
import { TbBucketOff } from "react-icons/tb";
import { clearCart } from "../../store/productSlice";
import { CartProps } from "../../common/types";

export const CartList = ({ products }: CartProps): JSX.Element => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col h-900 px-10">
      <div className="border-gray-300 border-2 relative w-full flex justify-center">
        <h4 className="w-1/6 text-center">image</h4>
        <h4 className="w-1/6 text-center">id</h4>
        <h3 className="w-1/6 text-center">title</h3>
        <h3 className="w-1/6 text-center">description</h3>
        <h3 className="w-1/6 text-center">rating</h3>
        <h3 className="w-1/6 text-center">category</h3>
        <h3 className="w-1/6 text-center">stock</h3>
      </div>
      {products.map((product: any) => (
        <CartItem key={product.id} product={product} />
      ))}
      <div className="relative bottom-0 right-0  mx-auto cursor-pointer ">
        <TbBucketOff
          className="transform cursor-pointer hover:scale-125 transition-all duration-300"
          onClick={() => {
            dispatch(clearCart());
          }}
          size={52}
        />
      </div>
    </div>
  );
};
