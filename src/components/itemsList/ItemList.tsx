import { ItemProduct } from "../itemProduct/ItemProduct";
import { ItemProductLoader } from "../itemProduct/ItemProductLoader";

export const ItemList = ({ products, isSuccess }): JSX.Element => {
  return (
    <div className="grid lg:gap-5 md:gap-3 sm:gap-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1">
      {isSuccess
        ? products.map((product: any) => (
            <ItemProduct key={product.id} product={product} />
          ))
        : new Array(30)
            .fill(null)
            .map((el, i) => <ItemProductLoader key={i} />)}
    </div>
  );
};
