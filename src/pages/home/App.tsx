import { useQuery } from "react-query";
import { productService } from "../../services/product";
import { ItemList } from "../../components/itemsList/ItemList";
import Layout from "../../components/layout/Layout";
import { useParams } from "react-router-dom";
import {
  selectFilteredItems,
  setProducts,
  toggleShowInput,
} from "../../store/productSlice";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import { useEffect, useState } from "react";

export const Home = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const filteredItems = useAppSelector(selectFilteredItems);
  const items = useAppSelector((state) => state.product.allProducts);
  const { id } = useParams();

  useEffect(() => {
    dispatch(toggleShowInput(true));
    window.scrollTo(0, 0);
  }, []);

  const {
    isLoading,
    isSuccess,
    data: response,
    error,
  } = useQuery("product list", () => productService.getAll(), {
    onSuccess: (data) => {
      dispatch(setProducts(data?.data.products));
    },
  });

  return (
    <Layout>
      <div className="container mx-auto py-10">
        <ItemList products={filteredItems} isSuccess={isSuccess} />
      </div>
    </Layout>
  );
};
