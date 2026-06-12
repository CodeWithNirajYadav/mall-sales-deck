"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  "https://img.businessoffashion.com/resizer/v2/E6FPF5LODNFUZN2CRHBBYWZ2YY.png?auth=bc9547f81efc2e4eeb21bd5acc84f155ecb02a6e1ae6b616ddfe99763b717644&width=1024",
  "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6",
  "https://images.unsplash.com/photo-1481437156560-3205f6a55735",
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
];

export default function StorySection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#050505] px-6 py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
        <div>
          <p className="mb-4 uppercase tracking-[6px] text-yellow-400">
            Why This Property
          </p>

          <h2 className="text-5xl font-bold leading-tight text-white">
            More Than A Shopping Destination
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-400">
            Designed as a city within a city. Retail, entertainment, dining,
            luxury experiences and global-scale events — all in one destination.
          </p>

          <button className="mt-10 rounded-full bg-white px-7 py-3 font-semibold text-black transition hover:scale-105">
            Explore Leasing
          </button>
        </div>

        <div className="relative h-150 overflow-hidden rounded-[40px]">
          <AnimatePresence mode="wait">
            <motion.img
              key={images[current]}
              src={images[current]}
              alt="Luxury property"
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />

          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${
                  current === i ? "w-8 bg-yellow-400" : "w-2 bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}