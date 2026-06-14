import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
export default function Login() {
  return (
    <div>
      <Navbar />
      
      <main className="p-8">
        {/* Your existing login form or content goes here */}
        <h1>Login</h1>
        <p>Please log in to your account.</p>
      </main>

      <Footer />
    </div>
  );
}