export default function Button({ children, className, ...props }) {
  return (
    <button
      className={`px-4 py-2 text-sm font-semibold rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
