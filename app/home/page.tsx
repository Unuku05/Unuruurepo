"use client";
import { useEffect, useState } from "react";
import Layout from "@/app/components/layout";
import styles from "@/app/about/page.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  // ✅ Load user info from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      router.push("/"); // Redirect back to login if not logged in
    }
  }, [router]);

  if (!user) return null; // Prevent rendering until user is loaded

  return (
    <div>
      <Layout>
        <main className="p-6">
          <h2 className="text-2xl font-bold mb-4">Home page</h2>

          <section className="flex flex-col items-center justify-center text-center">
            {/* ✅ Now shows user name */}
            <h1 className={styles.title}>Сайн байна уу, {user.name}!</h1>

            <p className={styles.description}>Мандах сургуулийн оюутан</p>
            <p>Би 2005 оны 9-р сарын 21-нд төрсөн.</p>
            <p>Морин хуур тоглох дуртай.</p>
          </section>

          <Image
            src="/images/mountain.jpg"
            alt="Beautiful Mountain"
            width={600}
            height={400}
            className="rounded-lg shadow-lg mt-6"
          />  
        </main>
      </Layout>
    </div>
  );
}
