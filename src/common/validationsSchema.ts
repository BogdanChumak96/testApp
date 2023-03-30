import { categories } from "./constants";
import { FormValues } from "./types";
import * as Yup from "yup";

export const validationSchemaAdd = Yup.object()
  .strict()
  .shape({
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

export const validationSchemaEdit = Yup.object().shape({
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
