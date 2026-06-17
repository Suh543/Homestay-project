/**
 * Input component
 * @param {Object} props
 * @param {string} props.placeholder - Placeholder text for the input
 * @param {string} props.type - Input type (text, email, password, etc.)
 * @param {Function} props.onChange - Function called when input value changes
 */

export default function Input({
  placeholder,
  type = "text",
  onChange,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className="border border-gray-300 px-4 py-2 rounded-md w-full"
    />
  );
}