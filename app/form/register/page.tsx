"use client";
import { useState } from "react";
import Link from "next/link"; // 👈 import Link
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const router = useRouter()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setError("Имэйл буруу байна!");
      return;
    }
    if (password.length < 6) {
      setError("Нууц үг хамгийн багадаа 6 тэмдэгт байх ёстой!");
      return;
    }
    if (password !== confirm) {
      setError("Нууц үг таарахгүй байна!");
      return;
    }

    setError("");
    localStorage.setItem("user", JSON.stringify({ name, email }));
    alert("Бүртгэл амжилттай!");

    // optionally redirect to login after success:
    // window.location.href = "/login";
    router.push("/")
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-72">
        <input
          type="text"
          placeholder="Name"
          className="border p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="border p-2 rounded"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="bg-green-500 text-white p-2 rounded">
          Register
        </button>
      </form>

      {/* 👇 Link to go back to login */}
      <p className="mt-3 text-sm">
        Аль хэдийн бүртгэлтэй юу?{" "}
        <Link href="/" className="text-blue-600 underline">
          Нэвтрэх
        </Link>
      </p>
    </div>
  );
}
