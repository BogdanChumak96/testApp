import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import { productService } from "../../services/product";
import { useQuery } from "react-query";
import { useAppDispatch } from "../../services/hooks";
import { toggleShowInput } from "../../store/productSlice";
import { FullItem } from "../../components/fullItem/FullItem";
import FullItemLoader from "../../components/fullItem/FullItemLoader";
type Props = {};

export const Product = (props: Props) => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { data: response, isSuccess } = useQuery(
    "one product",
    () => productService.getOne(id)
    // { cacheTime: 0 }
  );
  useEffect(() => {
    dispatch(toggleShowInput(false));
  }, []);
  return (
    <Layout>
      {isSuccess ? <FullItem product={response?.data} /> : <FullItemLoader />}
    </Layout>
  );
};
