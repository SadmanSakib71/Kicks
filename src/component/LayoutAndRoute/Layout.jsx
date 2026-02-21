import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
