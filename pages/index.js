import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import axios from "axios";


const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  return (
    <>
    
      <main >
        <Hero posts={props.posts}/>
        <Section posts={props.posts} category = {props.categories}/>
        <Footer/>
      </main>
    </>
  );
}
export async function getServerSideProps(context) {
   const Postres = await axios.get("http://localhost:3000/api/post");
  //  const posts = await Postres.json();
   console.log(Postres)
   if(Postres.status !== 200){
    return new Error("fetching data failed")
   }
   const posts = await Postres.data;

   const Catres = await fetch('http://localhost:3000/api/category')
   const categories = await Catres.json();
   console.log("CAtegory", categories)
  return {
    props: {posts,categories}, // will be passed to the page component as props
  }
}