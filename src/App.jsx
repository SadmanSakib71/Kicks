import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./component/LayoutAndRoute/Routing";
import { CartProvider } from "@/context/CartContext";

function App() {
  return (
    <CartProvider>
      <ToastContainer position="top-right" theme="light" />
      <div className="min-h-screen min-w-0 bg-[#e7e7e3] overflow-x-hidden">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 items-center mx-auto box-border">
          <RouterProvider router={router} />
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
