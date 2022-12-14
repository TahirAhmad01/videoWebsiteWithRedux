import React from "react";
import Footer from "./Footer";
import Navbar from "./navbar/Navbar";

export function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
