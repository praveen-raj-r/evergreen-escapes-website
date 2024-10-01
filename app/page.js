import Image from "next/image";
import Link from "next/link";
import bg from "@/public/bg.png";

export default function Page() {
  return (
    <main className="sm:mt-24">
      <Image
        placeholder="blur"
        className="object-cover object-top"
        fill
        src={bg}
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-10 text-center">
        <h1 className="mb-10 text-2xl font-normal tracking-tight sm:text-6xl lg:text-8xl text-primary-50">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="px-3 py-2 font-semibold transition-all sm:py-6 sm:text-lg sm:px-8 bg-accent-500 text-primary-950 hover:bg-accent-600"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
