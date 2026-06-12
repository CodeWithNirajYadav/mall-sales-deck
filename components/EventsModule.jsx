"use client";

import { motion } from "framer-motion";

const events = [
  {
    title: "Global Concerts",
    desc: "Host international performances and large audiences.",
    image:
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4",
  },
  {
    title: "Brand Activations",
    desc: "Launch products in a premium environment.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72",
  },
  {
    title: "Luxury Experiences",
    desc: "Exclusive showcases and VIP engagement.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
  },
];

export default function EventsModule() {
  return (
    <section id="events" className="bg-black px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <p className="text-center uppercase tracking-[8px] text-yellow-400">
          Events & Platform
        </p>

        <h2 className="mt-5 text-center text-5xl font-bold text-white">
          Become Part Of The Destination
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 transition hover:scale-[1.03] hover:bg-white hover:text-black"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white group-hover:text-black">
                  {event.title}
                </h3>

                <p className="mt-5 text-gray-400 group-hover:text-gray-700">
                  {event.desc}
                </p>

                <button className="mt-10 rounded-full border border-white/20 px-5 py-2 text-white transition group-hover:border-black group-hover:text-black">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}