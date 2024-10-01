"use client";
import { useFormStatus } from "react-dom";

function SubmitButton({ children, pendingLabel }) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="px-4 py-2 font-semibold transition-all sm:py-4 sm:px-8 bg-accent-500 text-primary-800 hover:bg-accent-600 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
    >
      {pending ? pendingLabel : children}
    </button>
  );
}

export default SubmitButton;
