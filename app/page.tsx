import Layout from "./components/layout";
import styles from "@/app/about/page.module.css";
import Link from "next/link";
export default function About() {
  return (
    <>
      <Layout>
      <main className="p-6">
        <h2 className="text-2xl font-bold mb-4">Home page</h2>
        <section className="flex flex-col items-center justify-center text-center">
          <h1 className={styles.title}>Unuruu</h1>
          <p className={styles.description}>
           Mandakh surguuliin oyutan
          </p>
          <p> Bi 2005 oni 9n sariin 21nd tursun </p>
          <p>Morin khuur togloh durtai</p>
        </section>
      </main>
      </Layout>
    </>
  );
}
