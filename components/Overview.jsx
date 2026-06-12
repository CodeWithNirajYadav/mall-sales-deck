"use client";

import { motion } from "framer-motion";

const overviewImages = [
  "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
  "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6",
];

export default function Overview() {
  return (
    <section id="overview" className="bg-[#050505] px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-7xl text-center"
      >
        <p className="uppercase tracking-[8px] text-yellow-400">Overview</p>

        <h2 className="mt-5 text-5xl font-bold text-white">
          The Ultimate Destination
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
          A meticulously planned city within a city, offering a seamless blend
          of retail, entertainment, and luxury. Discover why millions choose us
          every year.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-4">
          {overviewImages.map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`overflow-hidden rounded-[32px] ${
                index === 0 || index === 3 ? "md:mt-12" : ""
              }`}
            >
              <img
                src={image}
                alt="Mall overview"
                className="h-[420px] w-full object-cover transition duration-700 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}