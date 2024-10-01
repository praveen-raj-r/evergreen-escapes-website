"use client";

import {
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
} from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useReservation } from "./ReservationContext";

function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
}

function DateSelector({ settings, bookedDates, cabin }) {
  const { range, setRange, resetRange } = useReservation();

  const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range;

  const { regularPrice, discount } = cabin;

  const numNights = differenceInDays(displayRange.to, displayRange.from);
  const cabinPrice = numNights * (regularPrice - discount);

  const { minBookingLength, maxBookingLength } = settings;

  return (
    <div className="flex flex-col justify-between">
      <DayPicker
        selected={displayRange}
        onSelect={setRange}
        className="py-6 lg:py-12 place-self-center"
        mode="range"
        min={minBookingLength + 1}
        max={maxBookingLength}
        fromMonth={new Date()}
        fromDate={new Date()}
        toYear={new Date().getFullYear() + 5}
        captionLayout="dropdown"
        numberOfMonths={2}
        disabled={(curDate) =>
          isPast(new Date(curDate)) ||
          bookedDates.some((date) => isSameDay(date, curDate))
        }
      />

      <div className="flex items-center justify-between px-8 bg-accent-500 text-primary-800 ">
        <div className="flex flex-col items-baseline gap-1 my-3 md:gap-6 md:flex-row">
          <div className="flex items-center gap-3 ">
            <p className="flex items-baseline gap-2">
              {discount > 0 ? (
                <>
                  <span className="md:text-2xl">
                    ${regularPrice - discount}
                  </span>
                  <span className="font-semibold line-through text-primary-700">
                    ${regularPrice}
                  </span>
                </>
              ) : (
                <span className="md:text-2xl">${regularPrice}</span>
              )}
              <span className="">/night</span>
            </p>
            {numNights ? (
              <p className="px-1 md:py-2 md:px-3 md:text-2xl bg-accent-600">
                <span>&times;</span> <span>{numNights}</span>
              </p>
            ) : null}
          </div>
          {numNights ? (
            <p>
              <span className="font-bold uppercase md:text-lg">Total</span>{" "}
              <span className="font-semibold md:text-2xl">${cabinPrice}</span>
            </p>
          ) : null}
        </div>

        {range.from || range.to ? (
          <button
            className="px-4 py-2 text-sm font-semibold border border-primary-800"
            onClick={resetRange}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
