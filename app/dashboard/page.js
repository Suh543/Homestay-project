import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
export default function Dashboard() {
  return (
    <div>
      <Navbar />
      
      <main className="p-8">
        {/* Your existing dashboard content goes here */}
        <h1>Dashboard</h1>
        <p>Welcome to your user dashboard!</p>
      </main>

      <Footer />
    </div>
  );
}