import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  const classes =
    "w-full px-4 py-2 border rounded-md bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400";

  return (
    <div className="flex flex-col gap-2 mb-4">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}
      {textarea ? (
        <textarea ref={ref} className={classes} {...props} />
      ) : (
        <input ref={ref} className={classes} {...props} />
      )}
    </div>
  );
});

export default Input;
