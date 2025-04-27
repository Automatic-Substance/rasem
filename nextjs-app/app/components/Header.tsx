import RasemLogo from "@/app/assets/icons/rasem-logo.svg";
export default function Header() {
  return (
    <header className="fixed z-50 w-full flex">
      <div className="container py-6 sm:px-5 flex justify-center">
        <nav>
          <RasemLogo className="w-[280px] translate-y-16" />
        </nav>
      </div>
    </header>
  );
}
