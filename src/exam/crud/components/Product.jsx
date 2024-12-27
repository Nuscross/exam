import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { MdEditSquare } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import { FaCirclePlus } from "react-icons/fa6";

const getBookFromLocalStorage = () =>  {
  return JSON.parse(localStorage.getItem('book')) || [];
}

const Product = () => {

  const navigate = useNavigate();

  const [bookList,setBookList] = useState(getBookFromLocalStorage);

  const deleteBook = (id) => {
    const deleteBook = bookList.filter((item)=>item.id === id);
    const newBookList = bookList.filter((item)=>item.id !== id);
    setBookList(newBookList);
    localStorage.setItem("book", JSON.stringify(newBookList));
    toast.success(`Delete ${deleteBook[0].name} successfully.`);
  }

  return (
    <div className="mx-auto py-10 px-6 max-w-[1140px]">
      <div className="flex flex-wrap justify-around gap-10">
        { bookList.length > 0 ? 
            bookList.map(book => {
              const { id, name, category, author, description, price } = book;
              return (
                <div key={id} className="flex flex-col gap-2 p-7 w-full md:w-[45%] text-sm bg-orange-200 rounded-lg">
                  <h2 className="mb-2 text-2xl font-bold">{name}</h2>
                  <p>
                    <span className="font-bold">Category : </span>
                    {category}
                  </p>
                  <p>
                    <span className="font-bold">Author : </span>
                    {author}
                  </p>
                  <p>
                    <span className="font-bold">Short Description :</span>
                    <br />
                    {description}
                  </p>
                  <p>
                    <span className="font-bold">Price : </span>
                    {price} Baht
                  </p>
                  <div className="flex flex-warp gap-3 mt-3">
                    <button onClick={()=>navigate(`/edit-product/${id}`)} type="button" className="flex items-center gap-1 p-2 text-white bg-amber-500 hover:bg-amber-600 rounded-md">
                      <MdEditSquare />
                      Edit
                    </button>
                    <button onClick={()=>deleteBook(id)} type="button" className="flex items-center gap-1 p-2 text-white bg-red-500 hover:bg-red-600 rounded-md">
                      <TiDelete />
                      Delete
                    </button>
                  </div>
                </div>
              )
            })
            :
            <div className="flex flex-col items-center justify-center gap-2 p-7 w-full md:w-[97%] text-sm bg-orange-200 rounded-lg">
              <p className="mb-2 text-xl font-bold">No Books Data. Please Add Book.</p>
              <Link to="/add-product">
                <button type="button" className="flex items-center gap-2 px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md">
                  <FaCirclePlus />
                  Add Book
                </button>
              </Link>
            </div>
        }
      </div>
    </div>
  )
}

export default Product;