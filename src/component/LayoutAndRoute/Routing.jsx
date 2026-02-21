import { createBrowserRouter } from "react-router-dom";
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
        path: "Product-details",
        element: <ProductDetails />,
      },
    ],
  },
]);
