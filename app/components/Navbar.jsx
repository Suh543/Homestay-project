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
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <Link href="/">
          <h1 className="text-3xl font-extrabold tracking-wide text-blue-600 dark:text-emerald-400 cursor-pointer">
            Stayora
          </h1>
        </Link>

        {/* Navigation */}
        <ul className="flex items-center gap-8 text-gray-700 dark:text-gray-200 font-medium">
          <li>
            <Link
              href="/"
              className="hover:text-blue-600 dark:hover:text-emerald-400 transition duration-300"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className="hover:text-blue-600 dark:hover:text-emerald-400 transition duration-300"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard"
              className="hover:text-blue-600 dark:hover:text-emerald-400 transition duration-300"
            >
              Dashboard
            </Link>
          </li>

          <li>
            <Link
              href="/login"
              className="hover:text-blue-600 dark:hover:text-emerald-400 transition duration-300"
            >
              Login
            </Link>
          </li>
        </ul>

        {/* Dark Mode Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2 font-medium hover:bg-blue-600 hover:text-white dark:hover:bg-emerald-500 transition duration-300"
        >
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>

      </div>
    </nav>
  );
}