import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const Layout = () => {

  useEffect(() => {
    document.body.style.backgroundColor = "black";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className="w-ful pt-[90px]">
      <Navigation />
      <Outlet />
    </div>
  )

}

export default Layout;