/**
 * Button component
 * @param {Object} props
 * @param {string} props.text - Text displayed inside the button
 * @param {Function} props.onClick - Function called when the button is clicked
 */

export default function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
    >
      {text}
    </button>
  );
}