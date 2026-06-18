import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.jsx";

export const metadata = {
  title: "Homestay",
  description: "Homestay Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300 min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
