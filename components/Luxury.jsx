
"use client";

import { motion } from "framer-motion";

const luxuryImages = [
  "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b",
  "https://images.unsplash.com/photo-1521334884684-d80222895322",
];

export default function Luxury() {
  return (
    <section id="luxury" className="bg-black px-6 py-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="
          mx-auto
          max-w-7xl
          overflow-hidden
          rounded-[40px]
          border
          border-white/10
          bg-white/5
          p-10
        "
      >
        <div className="grid items-center gap-14 md:grid-cols-2">

          {/* Images */}
          <div className="grid grid-cols-2 gap-4">

            {luxuryImages.map((img, index) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className={`
                  overflow-hidden
                  rounded-[28px]
                  ${
                    index === 1 || index === 2
                      ? "translate-y-8"
                      : ""
                  }
                `}
              >
                <img
                  src={img}
                  alt="Luxury"
                  className="
                    h-[260px]
                    w-full
                    object-cover
                    transition
                    duration-700
                    hover:scale-110
                  "
                />
              </motion.div>
            ))}

          </div>

          {/* Content */}
          <div>
            <p className="uppercase tracking-[8px] text-yellow-400">
              Luxury
            </p>

            <h2 className="mt-5 text-5xl font-bold text-white">
              The Premium Collection
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
              A dedicated avenue featuring the absolute pinnacle
              of high-end fashion, bespoke jewelry and VIP
              concierge services.
            </p>

            <button
              className="
                mt-10
                rounded-full
                bg-yellow-400
                px-8
                py-3
                font-semibold
                text-black
                transition
                hover:scale-105
              "
            >
              Explore Luxury
            </button>
          </div>

        </div>
      </motion.div>
    </section>
  );
}

