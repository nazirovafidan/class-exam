import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  image: Yup.string()
    .url("Invalid URL format")
    .required("Image URL is required"),
  price: Yup.number()
    .typeError("Price must be a number")
    .required("Price is required")
    .positive("Price must be a positive number"),
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
});