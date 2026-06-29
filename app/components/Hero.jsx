export default function Hero() {
  return (
    <section
      className="relative min-h-[120vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/hero.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center pb-56">

        <p className="uppercase tracking-[0.35em] text-emerald-300 font-semibold">
          Welcome to Stayora
        </p>

        <h1 className="mt-5 text-5xl md:text-7xl font-extrabold text-white leading-tight">
          Find Your
          <br />
          Perfect Stay
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-200">
          Discover peaceful mountain retreats, luxury homestays,
          and unforgettable travel experiences across India.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-5">

          <button className="rounded-full bg-emerald-500 px-8 py-4 font-semibold text-white shadow-xl hover:bg-emerald-600 transition">
            Explore Stays
          </button>

          <button className="rounded-full border border-white px-8 py-4 font-semibold text-white hover:bg-white hover:text-black transition">
            Learn More
          </button>

        </div>

      </div>
    </section>
  );
}