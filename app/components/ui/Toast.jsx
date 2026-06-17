/**
 * Toast component
 * @param {Object} props
 * @param {string} props.message - Notification message to display
 */

export default function Toast({ message }) {
  return (
    <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded-md shadow-md">
      {message}
    </div>
  );
}