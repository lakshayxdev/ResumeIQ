


import {
  FileSearch,
  Briefcase,
  BadgeCheck,
  History,
  FileText,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: FileSearch,
    title: "AI Resume Analysis",
    description:
      "Get detailed AI-powered insights on resume quality, formatting, strengths and weaknesses.",
  },
  {
    icon: Briefcase,
    title: "ATS Job Matching",
    description:
      "Compare your resume against real job descriptions and maximize ATS compatibility.",
  },
  {
    icon: BadgeCheck,
    title: "Smart Suggestions",
    description:
      "Receive personalized recommendations to improve interview readiness and resume quality.",
  },
  {
    icon: History,
    title: "Analysis History",
    description:
      "Access all previous resume analyses with ATS scores and job roles anytime.",
  },
  {
    icon: FileText,
    title: "Resume Builder",
    description:
      "Build beautiful resumes using professional templates with live preview and PDF export.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Workspace",
    description:
      "JWT authentication keeps every uploaded resume and generated report completely private.",
  },
];

export default function Features() {
  return (
    <section id="feature"
    className="relative py-28 bg-[#070B16] overflow-hidden">

       <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:70px_70px]" />
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-violet-600/20 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-flex rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm font-medium text-violet-300">
            Features
          </span>

          <h2 className="mt-8 text-4xl font-bold text-white">
            Everything You Need
            <span className="block bg-linear-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              To Build Better Resumes
            </span>
          </h2>

          <p className="mt-6 text-lg text-center leading-8 text-slate-400">
            ResumeIQ combines AI-powered resume analysis, ATS optimization,
            resume building and intelligent job matching into one seamless
            platform.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-violet-500/40 hover:shadow-[0_0_40px_rgba(139,92,246,0.2)]"
              >


                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-600/10 blur-3xl group-hover:bg-violet-500/20 transition-all duration-500" />


                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 shadow-lg">

                  <Icon className="text-white" size={30} />

                </div>


                <h3 className="relative mt-7 text-2xl font-semibold text-white">

                  {feature.title}

                </h3>

                <p className="relative mt-4 leading-8 text-slate-400">

                  {feature.description}

                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}