import React, { useEffect } from "react";
import Layout from "../../components/layout/Layout";
import { toggleShowInput } from "../../store/productSlice";
import { useAppDispatch } from "../../services/hooks";

type Props = {};

export const AddProduct = (props: Props) => {
  const dispatch = useAppDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    dispatch(toggleShowInput(false));
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div
        className="
            flex 
            h-120 
            rounded-xl
            mt-10
            items-center 
            justify-center 
            align-center 
            bg-white
            container mx-auto py-10
            "
      >
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center py-5"
        >
          <label className="text-lg font-bold mb-2">Enter Category</label>
          <input
            type="text"
            className="w-full border border-gray-400 p-2 rounded mb-4"
          />

          <label className="text-lg font-bold mb-2">Enter Id</label>
          <input
            type="text"
            className="w-full border border-gray-400 p-2 rounded mb-4"
          />

          <label className="text-lg font-bold mb-2">Enter Description</label>
          <input
            type="text"
            className="w-full border border-gray-400 p-2 rounded mb-4"
          />

          <label className="text-lg font-bold mb-2">Enter URL Image</label>
          <input
            type="text"
            className="w-full border border-gray-400 p-2 rounded mb-4"
          />

          <label className="text-lg font-bold mb-2">Enter Price in $</label>
          <input
            type="text"
            className="w-full border border-gray-400 p-2 rounded mb-4"
          />

          <label className="text-lg font-bold mb-2">Enter Rating</label>
          <input
            type="text"
            className="w-full border border-gray-400 p-2 rounded mb-4"
          />
          <label className="text-lg font-bold mb-2">Enter Title</label>
          <input
            className="w-full border border-gray-400 p-2 rounded mb-4"
            type="text"
          />
          <input
            className="bg-gray-500 hover:bg-gray-700 cursor-pointer text-white font-bold py-2 px-4 rounded"
            type="submit"
          />
        </form>
      </div>
    </Layout>
  );
};
