import { createBrowserRouter, RouterProvider }  from "react-router-dom";
import Layout from "./Layout";
import Product from "./Product";
import AddProduct from "./AddProduct";
import EditProduct, { loader as editBookLoader }  from "./EditProduct";
import Error from "./Error";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Product />,
          errorElement: <Error />,
        },
        {
          path: "/add-product",
          element: <AddProduct />,
          errorElement: <Error />,
        },
        {
          path: "/edit-product/:id",
          loader: editBookLoader,
          element: <EditProduct />,
          errorElement: <Error />,
        },
      ]
    },
  ]
)

const Route = () => {

  return (
    <RouterProvider router={router}></RouterProvider>
  )

}

export default Route;