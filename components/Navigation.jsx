"use client";

import { useState } from "react";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  const links = ["Overview", "Retail", "Experiences", "Events", "Luxury"];

  return (
    <nav className="fixed left-0 top-0 z-50 w-full px-4">
      <div className="mx-auto mt-5 max-w-7xl rounded-[32px] border border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="flex items-center justify-between px-6 py-4">
          <a
            href="#"
            className="cursor-pointer text-lg font-bold tracking-[6px] text-white"
          >
            MALL.DECK
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-white/70 transition hover:text-white"
              >
                {item}
              </a>
            ))}

            <a
              href="#contact"
              className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-black transition hover:scale-105"
            >
              Contact
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="block text-3xl text-white md:hidden"
          >
            {open ? "×" : "☰"}
          </button>
        </div>

        {open && (
          <div className="border-t border-white/10 px-6 pb-6 pt-3 md:hidden">
            <div className="flex flex-col gap-4">
              {links.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-white/70 hover:text-white"
                >
                  {item}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-black"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}