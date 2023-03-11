import React from "react";
import Navbar from "./Navbar";
import NavbarTop from "./NavbarTop";

const Layout = ({ children }) => {
  return  <>
      <NavbarTop />
      <Navbar />
      {children}  
     
    </>
};

export default Layout;
//  //aikhaner children theke somostho component ba app ta render hobe jemon pages er vitor index.js er moddhe jabe