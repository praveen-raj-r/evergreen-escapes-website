import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="z-10 flex items-center gap-4">
      <Image
        className="size-8 sm:size-10 md:size-auto"
        src={logo}
        height="60"
        width="60"
        quality={100}
        alt="Evergreen Escapes logo"
      />
      <span className="text-xl font-semibold text-primary-100">
        Evergreen Escapes
      </span>
    </Link>
  );
}

export default Logo;
