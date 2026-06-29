export default function Card({
  title,
  description,
  location,
  price,
  rating,
}) {
  return (
    <div
  className="
  w-full
  max-w-[250px]
  rounded-2xl
  border border-white/10
  bg-white/[0.03]
  backdrop-blur-md
  p-4
  shadow-lg
  text-white
  transition-all
  duration-300
  hover:-translate-y-2
  hover:bg-white/[0.06]
  "
>
      {/* Top Row */}
      <div className="flex items-center justify-between">

        {/* Glass Rating */}
        <span
          className="
          rounded-full
          border border-white/10
          bg-white/10 
          backdrop-blur-md
          px-3
          py-1
          text-sm
          "
        >
          ⭐ {rating}
        </span>

        {/* Price */}
        <span className="font-semibold text-cyan-300">
          {price}
        </span>

      </div>

      {/* Title */}
      <h2 className="mt-4 text-xl font-bold"></h2>

      {/* Location */}
      <p className="mt-2 text-gray-200">
        📍 {location}
      </p>

      {/* Description */}
      <p className="mt-3 text-sm leading-6 text-gray-300"></p>

      {/* Glass Button */}
      <button className="mt-4 text-emerald-400 font-semibold hover:text-white transition">
  View →
</button>
    </div>
  );
}