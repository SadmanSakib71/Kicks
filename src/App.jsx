import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./component/LayoutAndRoute/Routing";

function App() {
  return (
    <div className="min-h-screen min-w-0 bg-[#e7e7e3] overflow-x-hidden">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 items-center mx-auto box-border">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
