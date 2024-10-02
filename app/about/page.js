import Image from "next/image";
import Link from "next/link";

import image1 from "@/public/about-1.jpg";
import image2 from "@/public/about-2.jpg";
import { getCabins } from "../_lib/data-service";

export const metadata = {
  title: "About",
};

export const revalidate = 86400;

async function Page() {
  const cabins = await getCabins();
  return (
    <div className="flex flex-col gap-10 px-5">
      {/* Card-1 */}
      <div className="flex flex-col gap-10 md:flex-row">
        <div>
          <h1 className="text-4xl font-medium text-center sm:text-left sm:mb-10 text-accent-400">
            Welcome to The Wild Oasis
          </h1>

          <Buttons className="sm:hidden" />

          <div className="mt-5 space-y-8 text-center sm:mt-0 sm:text-left">
            <p>
              Where nature&apos;s beauty and comfortable living blend
              seamlessly. Hidden away in the heart of the Italian Dolomites,
              this is your paradise away from home. But it&apos;s not just about
              the luxury cabins. It&apos;s about the experience of reconnecting
              with nature and enjoying simple pleasures with family.
            </p>
            <p>
              Our {cabins.length} luxury cabins provide a cozy base, but the
              real freedom and peace you&apos;ll find in the surrounding
              mountains. Wander through lush forests, breathe in the fresh air,
              and watch the stars twinkle above from the warmth of a campfire or
              your hot tub.
            </p>
            <p>
              This is where memorable moments are made, surrounded by
              nature&apos;s splendor. It&apos;s a place to slow down, relax, and
              feel the joy of being together in a beautiful setting.
            </p>
          </div>
        </div>
        <Image
          src={image1}
          placeholder="blur"
          quality={80}
          className="h-auto sm:h-[400px] md:h-[350px] lg:h-[400px]"
          alt="Family sitting around a fire pit in front of cabin"
        />
      </div>
      {/* Card-2 */}

      <div className="flex flex-col-reverse gap-10 md:flex-row">
        <Image
          placeholder="blur"
          className="h-auto sm:h-[400px] md:h-[350px] lg:h-[400px]"
          src={image2}
          quality={80}
          alt="Family that manages The Wild Oasis"
        />
        <div>
          <h1 className="mb-10 text-4xl font-medium text-center sm:text-left text-accent-400">
            Managed by our family since 1962
          </h1>

          <div className="space-y-8 text-center sm:text-left">
            <p>
              Since 1962, The Wild Oasis has been a cherished family-run
              retreat. Started by our grandparents, this haven has been nurtured
              with love and care, passing down through our family as a testament
              to our dedication to creating a warm, welcoming environment.
            </p>
            <p>
              Over the years, we&apos;ve maintained the essence of The Wild
              Oasis, blending the timeless beauty of the mountains with the
              personal touch only a family business can offer. Here, you&apos;re
              not just a guest; you&apos;re part of our extended family. So join
              us at The Wild Oasis soon, where tradition meets tranquility, and
              every visit is like coming home.
            </p>
          </div>
        </div>
      </div>

      {/* BUTTONS */}
      <Buttons />
    </div>
  );
}

function Buttons({ className }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Link
        href="/cabins"
        className="inline-block px-4 py-2 mt-4 font-semibold transition-all sm:text-lg sm:py-5 sm:px-8 bg-accent-500 text-primary-800 hover:bg-accent-600"
      >
        Explore our luxury cabins
      </Link>
    </div>
  );
}
export default Page;
