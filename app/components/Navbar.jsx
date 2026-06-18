"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="flex flex-wrap items-center justify-between p-4 shadow-md dark:bg-gray-800">
      <h1 className="text-2xl font-bold">Homestay</h1>

      <ul className="flex gap-6">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/login">Login</Link></li>
      </ul>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="rounded border px-3 py-1 dark:border-gray-300"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}