import { useQuery } from "react-query";
import { productService } from "../../services/product";
import { ItemList } from "../../components/itemsList/ItemList";
import Layout from "../../components/layout/Layout";
import { useParams } from "react-router-dom";
import {
  selectSortedItems,
  setProducts,
  toggleShowInput,
} from "../../store/productSlice";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import { useEffect } from "react";

export const Home = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const sortedValue = useAppSelector((state) => state.product.sortValue);

  const products = useAppSelector((state) =>
    selectSortedItems(state, sortedValue)
  );
  useEffect(() => {
    dispatch(toggleShowInput(true));
    window.scrollTo(0, 0);
  }, []);

  const { isSuccess, data: response } = useQuery(
    "product list",
    () => productService.getAll(),
    {
      staleTime: Infinity,
      onSuccess: (data) => {
        dispatch(setProducts(data?.data.products));
      },
    }
  );

  return (
    <Layout>
      <div className="container mx-auto py-10">
        <ItemList products={products} isSuccess={isSuccess} />
      </div>
    </Layout>
  );
};
