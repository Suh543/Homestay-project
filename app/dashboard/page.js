import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
export default function Dashboard() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white p-8 transition-colors duration-300">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="text-gray-600 dark:text-gray-300">
        This is our dashboard page.
      </p>
    </main>
  );
}