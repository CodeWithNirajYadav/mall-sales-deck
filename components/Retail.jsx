
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  "https://nielseniq.com/wp-content/uploads/sites/4/2021/07/GettyImages-1210531235-1.jpg",
  "https://media.gettyimages.com/id/1972675105/video/loving-daddy-showing-a-cereal-to-his-daughter-while-shopping-for-groceries-at-the-supermarket.jpg?s=640x640&k=20&c=U_sETB0m8Pe-UwfFnQWvCvh-g82w-9y1swemNFvDH9A=",
  "https://media.istockphoto.com/id/1146273598/photo/young-woman-shopping-for-a-new-scarf-and-choosing-colorful-fabric-in-bazar.jpg?s=612x612&w=0&k=20&c=QbifWtik4k7RVxcdHvaAhsUwCZtRR_6g-BFxM8fcp8U=",
  "https://static.vecteezy.com/system/resources/thumbnails/045/642/322/small/cute-indian-girl-buying-hair-jewelry-from-street-market-of-delhi-photo.jpg",
];

export default function Retail() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="retail" className="bg-black px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-7xl"
      >
        <div className="grid items-center gap-14 md:grid-cols-2">

          {/* Image Slider */}
          <div className="relative order-2 h-[520px] overflow-hidden rounded-[40px] md:order-1">

            <AnimatePresence mode="wait">

              <motion.img
                key={images[current]}
                src={images[current]}
                alt="Retail"
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 h-full w-full object-cover"
              />

            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

            <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    current === i
                      ? "w-8 bg-yellow-400"
                      : "w-2 bg-white/50"
                  }`}
                />
              ))}
            </div>

          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <p className="mb-4 uppercase tracking-[6px] text-yellow-400">
              Retail
            </p>

            <h2 className="text-5xl font-bold leading-tight text-white">
              World-Class Shopping
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-400">
              Home to over 1,200 premium retail and dining brands.
              Discover fashion, entertainment and experiences in one place.
            </p>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
