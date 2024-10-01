import TextExpander from "@/app/_components/TextExpander";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

function Cabin({ cabin }) {
  const { image, name, description, maxCapacity } = cabin;
  return (
    <div className="grid lg:grid-cols-[3fr_4fr] gap-8 lg:gap-20 border border-primary-800 pt-4 sm:pt-10 lg:pt-3 pb-3 px-4 sm:px-10 mb-10 md:mb-24">
      <div className="relative lg:scale-[1.15] lg:-translate-x-3 h-[400px] lg:w-auto lg:h-auto">
        <Image
          className="object-cover"
          fill
          src={image}
          alt={`Cabin ${name}`}
        />
      </div>

      <div>
        <h3 className="font-black text-accent-100 text-3xl lg:text-7xl mb-5 lg:translate-x-[-254px] bg-primary-950 p-6 pb-1 pt-1 md:pt-6 lg:w-[150%]">
          Cabin {name}
        </h3>

        <p className="mb-10 text-lg text-primary-300">
          <TextExpander>{description}</TextExpander>
        </p>

        <ul className="flex flex-col gap-4 mb-3 sm:text-lg sm:mb-7">
          <li className="flex items-center gap-3">
            <UsersIcon className="w-5 h-5 text-primary-600" />
            <span>
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </span>
          </li>
          <li className="flex items-center gap-3">
            <MapPinIcon className="w-5 h-5 text-primary-600" />
            <span>
              Located in the heart of the{" "}
              <span className="font-bold">Dolomites</span> (Italy)
            </span>
          </li>
          <li className="flex items-center gap-3">
            <EyeSlashIcon className="w-5 h-5 text-primary-600" />
            <span>
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Cabin;
