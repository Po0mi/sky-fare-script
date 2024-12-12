export default function Header() {
  return (
    <header className="flex overflow-hidden absolute inset-x-0 top-0 z-0 flex-wrap gap-5 justify-center items-center px-5 py-6 w-full h-20 text-black bg-white min-h-[80px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:max-w-full">
      <div className="flex-1 shrink self-stretch my-auto text-3xl font-medium leading-none basis-0 max-md:max-w-full">
        Sky Fare
      </div>
      <nav className="flex gap-10 justify-center items-center self-stretch my-auto text-base whitespace-nowrap bg-white">
        <a href="/book" className="self-stretch my-auto">
          Book
        </a>
        <a href="/manage" className="self-stretch my-auto">
          Manage
        </a>
        <a href="/about" className="self-stretch my-auto">
          About
        </a>
      </nav>
    </header>
  );
}
