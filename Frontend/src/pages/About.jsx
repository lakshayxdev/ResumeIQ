import {
  Brain,
  Target,
  Sparkles,
  Code2,
} from "lucide-react";

const About = () => {
  return (
    <section id="about" className="relative min-h-screen overflow-hidden bg-[#070B16] px-6 py-24">

      {/* Grid Background */}

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:84px_84px]" />

      {/* Glow */}

      <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Heading */}

        <div className="text-center">

          <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-sm text-violet-300">
            About ResumeIQ
          </span>

          <h1 className="mt-6 text-5xl font-bold text-white">
            Helping You Build
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Better Resumes
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            ResumeIQ is an AI-powered resume analyzer designed to help
            students and professionals improve their resumes, maximize ATS
            compatibility, and understand exactly what recruiters are looking
            for.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4 ">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-violet-500/40 hover:shadow-[0_0_40px_rgba(139,92,246,0.2)]">
            <Brain className="mb-5 text-violet-400" size={40} />

            <h3 className="text-xl font-semibold text-white">
              AI Analysis
            </h3>

            <p className="mt-3 text-slate-400">
              Receive intelligent insights about your resume structure,
              strengths and weaknesses.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-violet-500/40 hover:shadow-[0_0_40px_rgba(139,92,246,0.2)]">
            <Target className="mb-5 text-violet-400" size={40} />

            <h3 className="text-xl font-semibold text-white">
              ATS Optimization
            </h3>

            <p className="mt-3 text-slate-400">
              Compare resumes with job descriptions and improve ATS scores
              before applying.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-violet-500/40 hover:shadow-[0_0_40px_rgba(139,92,246,0.2)]">
            <Sparkles className="mb-5 text-violet-400" size={40} />

            <h3 className="text-xl font-semibold text-white">
              Smart Suggestions
            </h3>

            <p className="mt-3 text-slate-400">
              Discover missing skills, improve wording and strengthen your
              resume instantly.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-violet-500/40 hover:shadow-[0_0_40px_rgba(139,92,246,0.2)]">
            <Code2 className="mb-5 text-violet-400" size={40} />

            <h3 className="text-xl font-semibold text-white">
              Modern Stack
            </h3>

            <p className="mt-3 text-slate-400">
              Built using React, Node.js, Express, MongoDB and modern AI
              technologies.
            </p>
          </div>

        </div>

        {/* Bottom Section */}

        <div className="mt-24 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-violet-500/40 hover:shadow-[0_0_40px_rgba(139,92,246,0.2)]">

          <h2 className="text-3xl font-bold text-white">
            Why ResumeIQ?
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400 ">
            A resume is often your first impression. ResumeIQ helps bridge
            the gap between your skills and what recruiters expect by
            providing meaningful AI-powered feedback in seconds. Whether
            you're applying for internships, placements, or full-time roles,
            ResumeIQ helps you submit a stronger, more ATS-friendly resume.
          </p>

        </div>

      </div>

    </section>
  );
};

export default About;