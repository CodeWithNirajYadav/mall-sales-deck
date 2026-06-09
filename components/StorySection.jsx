export default function StorySection() {
  return (
    <section className="bg-[#050505] px-6 py-32">

      <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">

        <div>

          <p className="mb-4 uppercase tracking-[6px] text-yellow-400">
            Why This Property
          </p>

          <h2 className="text-5xl font-bold leading-tight">
            More Than A Shopping Destination
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-400">
            Designed as a city within a city.
            Retail, entertainment, dining,
            luxury experiences and global-scale events —
            all in one destination.
          </p>

          <button className="mt-10 rounded-full bg-white px-7 py-3 text-black">
            Explore Leasing
          </button>

        </div>

        <div>

          <img
            src="/images/story.jpg"
            alt=""
            className="h-150 w-full rounded-[40px] object-cover"
          />

        </div>

      </div>

    </section>
  );
}