import { createBrowserRouter } from "react-router-dom";
import Cart from "../CartPage/Cart";
import LandingPage from "../LandingPage/LandingPage";
import ProductDetails from "../ProdcutDetails/ProductDetails";
import Layout from "./Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <LandingPage /> },
      {
        path: "Product-details/:id",
        element: <ProductDetails />,
      },
      { path: "cart", element: <Cart /> },
    ],
  },
]);
