import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import {
  addProduct,
  toggleShowInput,
  updateProductById,
} from "../../store/productSlice";
import { useAppDispatch } from "../../services/hooks";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import { useMutation, useQueryClient } from "react-query";
import { productService } from "../../services/product";
import { useNavigate } from "react-router-dom";

const categories = [
  "All fragrances",
  "groceries",
  "home-decoration",
  "smartphones",
  "laptops",
];

const validationSchema = Yup.object().shape({
  id: Yup.number().required("Id is required"),
  category: Yup.string()
    .oneOf(categories, "Invalid category")
    .required("Category is required"),
  description: Yup.string().required("Description is required"),
  url: Yup.string().required("URL is required"),
  price: Yup.number().required("Price is required"),
  rating: Yup.number().required("Rating is required"),
  stock: Yup.number().required("Title is required"),
  title: Yup.string().required("Title is required"),
});

const initialValues = {
  id: "",
  category: "",
  description: "",
  url: "",
  price: "",
  rating: "",
  title: "",
  stock: "",
};

export const EditProduct = (props: Props) => {
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const deleteProductMutation = useMutation(productService.updateProduct, {
    onSuccess: (data) => {},
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      deleteProductMutation.mutate({
        id: values.id,
        updatedProduct: {
          category: values.category,
          description: values.description,
          images: [values.url],
          price: values.price,
          rating: values.rating,
          title: values.title,
          stock: values.stock,
        },
      });
      dispatch(
        updateProductById({
          updatedPost: {
            id: values.id,
            category: values.category,
            description: values.description,
            images: [values.url],
            price: values.price,
            rating: values.rating,
            title: values.title,
            stock: values.stock,
          },
        })
      );
      navigate("/");
    },
  });

  useEffect(() => {
    dispatch(toggleShowInput(false));
  }, [formik.values]);

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
        <Formik>
          {({ isSubmitting }) => (
            <Form
              onSubmit={formik.handleSubmit}
              className="flex flex-col items-center py-5"
            >
              <h1 className="text-2xl font-bold text-center mb-4">
                Edit product
              </h1>
              <label className="text-lg font-bold mb-1" htmlFor="description">
                Enter id
              </label>
              <Field
                type="text"
                name="id"
                id="id"
                value={formik.values.id}
                onChange={formik.handleChange}
                placeholder={
                  formik.touched.id && formik.errors.id
                    ? formik.errors.id
                    : "Enter id"
                }
                className={`w-full border border-gray-400 p-2 rounded mb-4 ${
                  formik.touched.id && formik.errors.id
                    ? "border-red-500 placeholder-red-500"
                    : ""
                }`}
                onBlur={formik.handleBlur}
              />
              <label className="text-lg font-bold mb-1" htmlFor="category">
                Change Category
              </label>
              <Field
                as="select"
                name="category"
                id="category"
                {...formik.getFieldProps("category")}
                className={`w-full border border-gray-400 p-2 rounded mb-4 ${
                  formik.touched.category && formik.errors.category
                    ? "border-red-500 placeholder-red-500"
                    : ""
                }`}
              >
                <option value="" disabled>
                  Select a category
                </option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </Field>
              <label className="text-lg font-bold mb-1" htmlFor="description">
                Change Description
              </label>
              <Field
                type="text"
                name="description"
                id="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                placeholder={
                  formik.touched.description && formik.errors.description
                    ? formik.errors.description
                    : "Change description"
                }
                className={`w-full border border-gray-400 p-2 rounded mb-4 ${
                  formik.touched.description && formik.errors.description
                    ? "border-red-500 placeholder-red-500"
                    : ""
                }`}
                onBlur={formik.handleBlur}
              />

              <label className="text-lg font-bold mb-1" htmlFor="url">
                Change URL Image
              </label>
              <Field
                type="text"
                name="url"
                id="url"
                value={formik.values.url}
                onChange={formik.handleChange}
                placeholder={
                  formik.touched.url && formik.errors.url
                    ? formik.errors.url
                    : "Change url image"
                }
                className={`w-full border border-gray-400 p-2 rounded mb-4 ${
                  formik.touched.url && formik.errors.url
                    ? "border-red-500 placeholder-red-500"
                    : ""
                }`}
                onBlur={formik.handleBlur}
              />

              <label className="text-lg font-bold mb-1" htmlFor="price">
                Change Price in $
              </label>
              <Field
                type="text"
                name="price"
                id="price"
                value={formik.values.price}
                onChange={formik.handleChange}
                placeholder={
                  formik.touched.price && formik.errors.price
                    ? formik.errors.price
                    : "Change price"
                }
                className={`w-full border border-gray-400 p-2 rounded mb-4 ${
                  formik.touched.price && formik.errors.price
                    ? "border-red-500 placeholder-red-500"
                    : ""
                }`}
                onBlur={formik.handleBlur}
              />

              <label className="text-lg font-bold mb-1" htmlFor="rating">
                Change Rating
              </label>
              <Field
                type="text"
                name="rating"
                id="rating"
                value={formik.values.rating}
                onChange={formik.handleChange}
                placeholder={
                  formik.touched.rating && formik.errors.rating
                    ? formik.errors.rating
                    : "Change rating"
                }
                className={`w-full border border-gray-400 p-2 rounded mb-4 ${
                  formik.touched.rating && formik.errors.rating
                    ? "border-red-500 placeholder-red-500"
                    : ""
                }`}
                onBlur={formik.handleBlur}
              />

              <label className="text-lg font-bold mb-1" htmlFor="title">
                Change Title
              </label>
              <Field
                type="text"
                name="title"
                id="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                placeholder={
                  formik.touched.title && formik.errors.title
                    ? formik.errors.title
                    : "Change title"
                }
                className={`w-full border border-gray-400 p-2 rounded mb-4 ${
                  formik.touched.title && formik.errors.title
                    ? "border-red-500 placeholder-red-500"
                    : ""
                }`}
                onBlur={formik.handleBlur}
              />

              <label className="text-lg font-bold mb-1" htmlFor="stock">
                Change Stock
              </label>
              <Field
                type="text"
                name="stock"
                id="stock"
                value={formik.values.stock}
                onChange={formik.handleChange}
                placeholder={
                  formik.touched.stock && formik.errors.stock
                    ? formik.errors.stock
                    : "Change stock"
                }
                className={`w-full border border-gray-400 p-2 rounded mb-4 ${
                  formik.touched.stock && formik.errors.stock
                    ? "border-red-500 placeholder-red-500"
                    : ""
                }`}
                onBlur={formik.handleBlur}
              />
              <button
                className={`text-white bg-gray-500 font-bold py-2 px-4 rounded ${
                  formik.isSubmitting
                    ? "opacity-50 bg-gray-800  cursor-not-allowed"
                    : "bg-red-500 placeholder-red-500"
                }`}
                type="submit"
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </Layout>
  );
};
