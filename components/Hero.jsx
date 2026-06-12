"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      {/* <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/1.avif')" }}
      /> */}

      <video
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 h-full w-full object-cover"
>
  <source src="https://www.pexels.com/download/video/28925823/" type="video/mp4" />
</video>

      <div className="absolute inset-0 bg-black/55" />

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 px-6 text-center"
      >
        <p className="uppercase tracking-[8px] text-yellow-400">
          Luxury Destination
        </p>

        <h1 className="mt-6 text-5xl font-bold md:text-7xl">
          The Future of Retail
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-gray-300">
          Retail • Events • Entertainment • Sponsorship
        </p>

        <button className="mt-8 rounded-full bg-white px-8 py-3 font-semibold text-black">
          Explore
        </button>
      </motion.div>
    </section>
  );
}