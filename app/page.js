import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Card
  title="Luxury Homestay"
  description="Enjoy a comfortable stay with amazing amenities."
/>
      <Footer />
    </>
  );
}
