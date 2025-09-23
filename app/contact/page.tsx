import Layout from "../components/layout";
import styles from "@/app/about/page.module.css";
import Link from "next/link";
export default function About() {
  return (
    <>
      <Layout>
      <main className="p-6">
        <section className="flex flex-col items-center justify-center text-center">
          <h1 className={styles.title}>Contacts</h1>
          <p className={styles.description}>Phone Number</p><p>88888888</p>
          <p className={styles.description}>Email</p><p>sw23d012@Mandakh.edu.mn</p>
        </section>
      </main>
      </Layout>
    </>
  );
}
