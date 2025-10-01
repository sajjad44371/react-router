import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";

const Root = () => {
  return (
    <>
      <div>
        <Header></Header>
        <div className="flex justify-between gap-5">
          <Sidebar className="flex-1/3"></Sidebar>
          <Outlet className="flex-2/3"></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Root;
