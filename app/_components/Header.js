import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";

function Header() {
  return (
    <header className="px-4 py-5 border-b sm:px-8 border-primary-900">
      <div className="flex flex-col items-center justify-between gap-10 mx-auto sm:gap-5 max-w-7xl md:flex-row">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
