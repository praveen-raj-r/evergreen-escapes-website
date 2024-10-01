"use client";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { format } from "date-fns";
import { useReservation } from "./ReservationContext";

function ReservationReminder() {
  const { range, resetRange } = useReservation();

  if (!range.from || !range.to) return null;

  return (
    <div className="fixed flex items-center gap-1 px-4 py-3 font-semibold -translate-x-1/2 shadow-xl w-max md:gap-8 md:rounded-full md:px-8 md:py-5 bottom-6 left-1/2 bg-accent-500 text-primary-800 text shadow-slate-900">
      <p>
        <span>👋</span> Don&apos;f forget to reserve your dates <br /> from{" "}
        {format(new Date(range.from), "MMM dd yyyy")} to{" "}
        {format(new Date(range.to), "MMM dd yyyy")}
      </p>
      <button
        onClick={resetRange}
        className="p-1 transition-all rounded-full hover:bg-accent-600"
      >
        <XMarkIcon className="w-5 h-5" />
      </button>
    </div>
  );
}

export default ReservationReminder;
