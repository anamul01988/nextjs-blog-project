import React from "react";
import Navbar from "./Navbar";
import NavbarTop from "./NavbarTop";

const Layout = ({ children }) => {
  return  <>
      <NavbarTop />
      <Navbar />
      {children}  //aikhane theke somostho component ba app ta render hobe jemon pages er vitor index.js er moddhe jabe
    </>
};

export default Layout;
