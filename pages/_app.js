// import Navbar from "@/components/Navbar";
// import NavbarTop from "@/components/NavbarTop";
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import NextNProgress from 'nextjs-progressbar';
export default function App({ Component, pageProps }) {
  return (
    <Layout>
    {/* <NavbarTop/>
      <Navbar /> */}
      <NextNProgress color="tomato" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true}/>
      <Component {...pageProps} /> //aita pages er vitor index.js theke render kora shuru korbe
    </Layout>
  );
}
