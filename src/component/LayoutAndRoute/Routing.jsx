import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import ProductDetails from "../ProdcutDetails/ProductDetails";
import Cart from "../CartPage/Cart";
import Layout from "./Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <LandingPage /> },
      {
        path: "Product-details",
        element: <ProductDetails />,
      },
      { path: "cart", element: <Cart /> },
    ],
  },
]);
