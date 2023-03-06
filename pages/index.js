import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    
      <main >
        <Hero />
        <Section/>
        <Footer/>
      </main>
    </>
  );
}
export async function getStaticProps(context) {
   const Postres = await fetch("http://localhost:3000/api/post");
   const posts = await Postres.json();
   console.log(posts)
  return {
    props: {}, // will be passed to the page component as props
  }
}