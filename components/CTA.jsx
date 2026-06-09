export default function CTA() {
  return (
    <section className="px-6 py-32">

      <div className="mx-auto max-w-6xl rounded-[40px] border border-white/10 bg-linear-to-b from-white/10 to-white/5 p-16 text-center">

        <p className="uppercase tracking-[8px] text-yellow-400">
          Ready To Join
        </p>

        <h2 className="mt-6 text-5xl font-bold">
          Bring Your Brand To The World Stage
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-400">
          Leasing opportunities, sponsorship packages,
          event partnerships and destination experiences.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">

          <button className="rounded-full bg-white px-8 py-4 text-black font-semibold">
            Start Leasing
          </button>

          <button className="rounded-full border border-white/20 px-8 py-4">
            Book An Event
          </button>

        </div>

      </div>

    </section>
  );
}