const features = [
  {
    title: "ATS Score Analysis",
    description:
      "Deep scan of document structure and formatting to ensure compatibility with top-tier ATS platforms.",
    icon: "📊",
  },
  {
    title: "Job Match Percentage",
    description:
      "Real-time semantic matching between your experience and specific job requirements.",
    icon: "🎯",
  },
  {
    title: "AI Suggestions",
    description:
      "Context-aware recommendations to improve bullet points and highlight achievements.",
    icon: "💡",
  },
  {
    title: "Keyword Detection",
    description:
      "Identify missing industry keywords and hard skills recruiters are searching for.",
    icon: "🔑",
  },
];

export default function Features() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">
            Uncompromising Career Insights
          </h2>

          <div className="w-16 h-1 bg-violet-800 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="
                bg-white/5
                backdrop-blur-xl
                border border-white/10
                rounded-2xl
                p-6
                hover:border-violet-500/40
                hover:bg-white/10
                hover:-translate-y-1
                transition-all duration-300
                hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]
group
              "
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-xl mb-5 group-hover:scale-110
transition-transform">
                {feature.icon}
              </div>

              <h3 className="text-lg font-semibold text-white mb-3">
                {feature.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}