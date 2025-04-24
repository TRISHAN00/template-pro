// src/components/Layout.js
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <>
    <Header/>
      <main className="container py-4">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
