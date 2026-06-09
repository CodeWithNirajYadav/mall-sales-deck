const stats = [
  { value: "100M+", label: "Annual Visitors" },
  { value: "1,200+", label: "Retail & Dining Brands" },
  { value: "5.9M", label: "Sq. Ft. Destination" },
  { value: "365", label: "Days of Events" },
];

export default function Stats() {
  return (
    <section className="bg-black px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur"
          >
            <h2 className="text-4xl font-bold text-yellow-300">
              {item.value}
            </h2>
            <p className="mt-3 text-sm uppercase tracking-[3px] text-gray-400">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}