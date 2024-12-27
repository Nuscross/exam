import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { nanoid } from "nanoid";
import { bookCategory } from "../data";
import AddSingleProduct from "./AddSingleProduct";

const AddProduct = () => {

  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    const books = JSON.parse(localStorage.getItem("book")) || [];
    if (data) {
      const addBook = {
        id: nanoid(),
        name: data.bookName,
        category: data.category,
        author: data.author,
        description: data.description,
        price: parseFloat(data.price),
      }
      books.push(addBook);
      localStorage.setItem("book", JSON.stringify(books));
      toast.success(`Add ${addBook.name} successfully.`);
    }
    reset();
    navigate("/");
  }

  return (
    <>
      <AddSingleProduct
        bookCategory={bookCategory}
        errors={errors}
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      />
    </>
  )
}

export default AddProduct;