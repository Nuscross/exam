import { createBrowserRouter, RouterProvider }  from "react-router-dom";
import Layout from "./Layout";
import Menu from "./Menu";
import Cart from "./Cart";
import OrderHistory from "./OrderHistory";
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
          element: <Menu />,
          errorElement: <Error />,
        },
        {
          path: "/cart",
          element: <Cart />,
          errorElement: <Error />,
        },
        {
          path: "/order-history",
          element: <OrderHistory />,
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