import { UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

function CabinCard({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <div className="flex border border-primary-800">
      <div className="relative flex-1">
        <Image
          fill
          src={image}
          alt={`Cabin ${name}`}
          className="object-cover border-r border-primary-800"
        />
      </div>

      <div className="flex-grow">
        <div className="px-4 pt-5 pb-2 sm:pb-4 sm:px-7 bg-primary-950">
          <h3 className="mb-1 font-semibold sm:mb-3 sm:text-2xl text-accent-500">
            Cabin {name}
          </h3>

          <div className="flex items-center gap-3 mb-1 sm:mb-2">
            <UsersIcon className="size-5 text-primary-600" />
            <p className="sm:text-lg text-primary-200">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </p>
          </div>

          <p className="flex items-baseline justify-end gap-3">
            {discount > 0 ? (
              <>
                <span className="text-3xl font-[350]">
                  ${regularPrice - discount}
                </span>
                <span className="font-semibold line-through text-primary-600">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-3xl font-[350]">${regularPrice}</span>
            )}
            <span className="text-primary-200">/ night</span>
          </p>
        </div>

        <div className="text-right border-t bg-primary-950 border-t-primary-800">
          <Link
            href={`/cabins/${id}`}
            className="inline-block px-6 py-4 transition-all border-l border-primary-800 hover:bg-accent-600 hover:text-primary-900"
          >
            Details & reservation &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CabinCard;
