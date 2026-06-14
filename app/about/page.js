import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
export default function About() {
  return (
    <div>
      <Navbar />
      
      <main className="p-8">
        {/* Keep whatever text or headings you already had here for your About page */}
        <h1>About Us</h1>
        <p>Welcome to our Homestay project!</p>
      </main>

      <Footer />
    </div>
  );
}