import { createBrowserRouter } from "react-router-dom";
import AllNewItems from "../AllNewItems";
import Cart from "../CartPage/Cart";
import LandingPage from "../LandingPage/LandingPage";
import ProductDetails from "../ProdcutDetails/ProductDetails";
import SameCategoryItems from "../SameCategoryItems";
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
      {
        path: "category-product/:id",
        element: <SameCategoryItems />,
      },
      { path: "cart", element: <Cart /> },
      { path: "all-new-items", element: <AllNewItems /> },
    ],
  },
]);
