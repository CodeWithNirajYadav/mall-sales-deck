const events = [
  {
    title: "Global Concerts",
    desc: "Host international performances and large audiences.",
  },
  {
    title: "Brand Activations",
    desc: "Launch products in a premium environment.",
  },
  {
    title: "Luxury Experiences",
    desc: "Exclusive showcases and VIP engagement.",
  },
];

export default function EventsModule() {
  return (
    <section className="bg-black px-6 py-32">

      <div className="mx-auto max-w-7xl">

        <p className="text-center uppercase tracking-[8px] text-yellow-400">
          Events & Platform
        </p>

        <h2 className="mt-5 text-center text-5xl font-bold">
          Become Part Of The Destination
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {events.map((event) => (
            <div
              key={event.title}
              className="group rounded-4xl border border-white/10 bg-white/5 p-8 transition hover:scale-[1.03] hover:bg-white hover:text-black"
            >
              <h3 className="text-2xl font-bold">
                {event.title}
              </h3>

              <p className="mt-5 text-gray-400 group-hover:text-gray-700">
                {event.desc}
              </p>

              <button className="mt-10 rounded-full border px-5 py-2">
                Learn More
              </button>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}