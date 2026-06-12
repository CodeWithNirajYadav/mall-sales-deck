
"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Dining",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
  },
  {
    title: "Entertainment",
    image:
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329",
  },
  {
    title: "Attractions",
    image:
      "https://images.unsplash.com/photo-1520038410233-7141be7e6f97",
  },
];

export default function Experiences() {
  return (
    <section id="experiences" className="bg-[#050505] px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-7xl"
      >
        <div className="text-center">
          <p className="uppercase tracking-[8px] text-yellow-400">
            Experiences
          </p>

          <h2 className="mt-5 text-5xl font-bold text-white">
            Unforgettable Moments
          </h2>

          <p className="mx-auto mb-16 mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            Dive into immersive attractions, family entertainment centers,
            and culinary journeys that redefine what a mall can be.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {experiences.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="
                group
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-white/5
              "
            >
              <div className="relative h-[420px] overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-110
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute bottom-0 p-8">
                  <h3 className="text-3xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-gray-300">
                    Curated experiences designed to create lasting memories
                    for every visitor.
                  </p>

                  <button className="mt-8 rounded-full bg-white px-6 py-3 text-black">
                    Explore
                  </button>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

