import Layout from "./components/layout";
import styles from "@/app/about/page.module.css";
import Link from "next/link";
import Image from "next/image";
export default function About() {
  return (
    <>
    <div>
    {/* <div className="bg-[url('/images/mountain.jpg')]  bg-cover bg-center min-h-screen"></div> */}
<Layout >
      <main className="p-6 " >

        <h2 className="text-2xl font-bold mb-4">Home page</h2>
        <section className="flex flex-col items-center justify-center text-center">
          <h1 className={styles.title}>Unuruu</h1>
          <p className={styles.description}>
           Mandakh surguuliin oyutan
          </p>
          <p> Bi 2005 oni 9n sariin 21nd tursun </p>
          <p>Morin khuur togloh durtai</p>
        </section>
              {}
      <Image
        src="/images/mountain.jpg" 
        alt="Beautiful Mountain"   
        width={600}                
        height={400}               
        className="rounded-lg shadow-lg"
        
      />  
      
      </main>
      </Layout>
    </div>
      
    </>
  );
}
