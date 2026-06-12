
"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#050505] px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="
          mx-auto
          max-w-6xl
          overflow-hidden
          rounded-[40px]
          border
          border-white/10
          bg-white/5
        "
      >
        <div className="grid md:grid-cols-2">

          <div className="p-14">
            <p className="uppercase tracking-[8px] text-yellow-400">
              Contact
            </p>

            <h2 className="mt-5 text-5xl font-bold text-white">
              Let’s Build Something Big
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-400">
              Explore leasing opportunities,
              sponsorships and premium
              destination experiences.
            </p>

            <div className="mt-10 space-y-5 text-gray-300">
              <p>📍 Downtown District</p>
              <p>📞 +91 9335091048</p>
              <p>✉ nirajy940@gmail.com.com</p>
            </div>
          </div>

          <div className="p-10">
            <form className="space-y-5">

              <input
                placeholder="Full Name"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  p-4
                  text-white
                "
              />

              <input
                placeholder="Email"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  p-4
                  text-white
                "
              />

              <textarea
                rows={5}
                placeholder="Message"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  p-4
                  text-white
                "
              />

              <button
                className="
                  w-full
                  rounded-full
                  bg-yellow-400
                  py-4
                  font-semibold
                  text-black
                "
              >
                Send Inquiry
              </button>

            </form>
          </div>

        </div>
      </motion.div>
    </section>
  );
}

