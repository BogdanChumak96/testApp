import { useEffect } from "react";
import { CartList } from "../../components/cartList/CartList";
import Layout from "../../components/layout/Layout";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import { toggleShowInput } from "../../store/productSlice";

export const Cart = (): JSX.Element => {
  const cartItems = useAppSelector((state) => state.product.favorites);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(toggleShowInput(false));
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div
        className="
            flex 
            h-full 
            rounded-xl
            mt-10
            items-center 
            justify-center 
            align-center 
            bg-white
            container mx-auto py-10
            "
      >
        {!!cartItems.length ? (
          <CartList products={cartItems} />
        ) : (
          <div>Cart is empty...</div>
        )}
      </div>
    </Layout>
  );
};
