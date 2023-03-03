import Navbar from "@/components/Navbar";
import NavbarTop from "@/components/NavbarTop";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
    <NavbarTop/>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
