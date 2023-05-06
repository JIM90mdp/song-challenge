import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";


const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between h-[100vh]">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
