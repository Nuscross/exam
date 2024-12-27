import { useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { bookCategory } from "../data";
import AddSingleProduct from "./AddSingleProduct";

export const loader = async ({ params }) => {
  const books = JSON.parse(localStorage.getItem("book")) || [];
  const { id } = params;
  const bookFilter = books.filter((item) => item.id === id);
  return { bookFilter };
};

const EditProduct = () => {

  const { bookFilter } = useLoaderData();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  useEffect(() => {
    if (bookFilter.length > 0) {
      const book = bookFilter[0];
      reset({
        bookName: book.name,
        category: book.category,
        author: book.author,
        description: book.description,
        price: book.price,
      });
    }
  }, [bookFilter,reset]);

  const onSubmit = (data) => {
    const books = JSON.parse(localStorage.getItem("book")) || [];
    if (data && bookFilter.length > 0) {
      const index = books.findIndex((item) => item.id === bookFilter[0].id);
      if (index !== -1) {
        books[index] = {
          ...books[index],
          name: data.bookName,
          category: data.category,
          author: data.author,
          description: data.description,
          price: parseFloat(data.price),
        };
        localStorage.setItem("book", JSON.stringify(books));
        toast.success(`Updated ${data.bookName} successfully.`);
      }
    }
    reset();
    navigate("/");
  }

  return (
    <>
      <AddSingleProduct
        bookCategory={bookCategory}
        bookFilter={bookFilter}
        errors={errors}
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      />
    </>
  )
}

export default EditProduct;