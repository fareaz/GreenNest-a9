import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const AuthLayout = () => {
  return (
    <div>
      <header className="max-w-7xl mx-auto">
        <Navbar></Navbar>
      </header>
      <main className="max-w-7xl mx-auto">
        <Outlet></Outlet>
      </main>
      <footer className="max-w-7xl mx-auto">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default AuthLayout;
