export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full">
      <div className="flex items-center justify-between px-8 py-6">

        <h1 className="text-xl font-bold tracking-[6px]">
          MALL.DECK
        </h1>

        <div className="hidden gap-8 md:flex text-sm">

          <a href="#">Overview</a>

          <a href="#">Retail</a>

          <a href="#">Events</a>

          <a href="#">Luxury</a>

          <button className="rounded-full bg-white px-5 py-2 text-black">
            Contact
          </button>

        </div>

      </div>
    </nav>
  );
}