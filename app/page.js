import Hero from "./components/Hero";
import Card from "./components/Card";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="-mt-56 relative z-20 pb-24">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-8 px-6">

          <Card
            title="Luxury Homestay"
            location="Goa"
            price="₹3,500/night"
            rating="4.9"
            description="Luxury comfort with stunning landscapes."
          />

          <Card
            title="Mountain View Homestay"
            location="Dehradun"
            price="₹2,000/night"
            rating="4.8"
            description="Wake up to breathtaking mountain views."
          />

        </div>
      </section>
    </>
  );
}