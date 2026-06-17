/**
 * Loader component
 * @param {Object} props
 * @param {string} props.size - Size of the loader (small, medium, large)
 */

export default function Loader({ size = "medium" }) {
  const sizes = {
    small: "w-4 h-4",
    medium: "w-8 h-8",
    large: "w-12 h-12",
  };

  return (
    <div
      className={`border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin ${sizes[size]}`}
    ></div>
  );
}