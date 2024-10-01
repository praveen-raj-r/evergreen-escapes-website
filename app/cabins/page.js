import CabinList from "@/app/_components/CabinList";
import { Suspense } from "react";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";

// export const revalidate = 0;

export const metadata = {
  title: "Cabins",
};

export default function Page({ searchParams }) {
  console.log(searchParams);
  const filter = searchParams?.capacity ?? "all";
  return (
    <div>
      <h1 className="mb-2 text-2xl font-medium sm:mb-5 sm:text-4xl text-accent-400">
        Our Luxury Cabins
      </h1>

      <p className="mb-5 sm:mb-10 sm:text-lg text-primary-200">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>

      <div className="flex justify-center mb-8 sm:justify-end">
        <Filter />
      </div>

      <Suspense key={filter} fallback={<Spinner />}>
        <CabinList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}
