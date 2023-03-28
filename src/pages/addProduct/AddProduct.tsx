import React from "react";
import Layout from "../../components/layout/Layout";

type Props = {};

export const AddProduct = (props: Props) => {
  return (
    <Layout>
      <div
        className="
            flex 
            h-96 
            rounded-xl
            mt-10
            items-center 
            justify-center 
            align-center 
            bg-white
            container mx-auto py-10
            "
      >
        Add Product
      </div>
    </Layout>
  );
};
