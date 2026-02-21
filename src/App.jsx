import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./component/LayoutAndRoute/Routing";

function App() {
  return (
    <div className="min-h-screen bg-[#E7E7E3]">
      <div className="w-7xl items-center mx-auto">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
