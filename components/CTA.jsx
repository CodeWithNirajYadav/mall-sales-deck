const ctaImages = [
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
  "https://images.unsplash.com/photo-1505236858219-8359eb29e329",
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
];

export default function CTA() {
  return (
    <section className="bg-black px-6 py-32">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[40px] border border-white/10 p-16 text-center">
        <div className="absolute inset-0 grid grid-cols-3">
          {ctaImages.map((img) => (
            <img
              key={img}
              src={img}
              alt="CTA"
              className="h-full w-full object-cover"
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-black/75" />

        <div className="relative z-10">
          <p className="uppercase tracking-[8px] text-yellow-400">
            Ready To Join
          </p>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Bring Your Brand To The World Stage
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-300">
            Leasing opportunities, sponsorship packages, event partnerships and
            destination experiences.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-full bg-white px-8 py-4 font-semibold text-black">
              Start Leasing
            </button>

            <button className="rounded-full border border-white/30 px-8 py-4 text-white">
              Book An Event
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}