export default function Card({
  title = "Mountain View Homestay",
  description = "A cozy place with beautiful mountain views.",
}) {
  return (
    <div  className="bg-white dark:bg-gray-700 text-black dark:text-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>

      <button className="bg-green-500 text-white px-4 py-2 rounded mt-3">
        View
      </button>
    </div>
  );
}