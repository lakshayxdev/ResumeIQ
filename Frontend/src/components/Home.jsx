import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate=useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden ">


      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:70px_70px]" />


      <div className="absolute left-1/2 top-40 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[180px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-[180px]" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        <div
    className="
      inline-flex
      items-center
      gap-2
      px-4
      py-2
      rounded-full
      border
      border-cyan-500/20
      bg-cyan-500/10
      mb-6
      
    "
  >
    <span
      className="
        w-2.5
        h-2.5
        rounded-full
        bg-violet-600
        animate-pulse
      "
    />

    <span
      className="
        text-sm
        font-medium
        text-violet-300
      "
    >
      AI-Powered ATS Analysis
    </span>
  </div>

<h1 className=" text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">

  Analyze.

  <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">

    Optimize.

  </span>

  <span className="block text-white">

    Get Hired.

  </span>

</h1>

<p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400">

  AI-powered resume analysis and ATS optimization to help you
  apply with confidence and land more interviews.

</p>

<div className="mt-5 flex flex-wrap justify-center gap-6">

  <button
  onClick={() => {user? navigate("/dashboard") : navigate("/login")}}
    className="group flex items-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-12 py-5 font-semibold text-white shadow-lg shadow-violet-600/30 transition-all duration-300 hover:scale-105 hover:shadow-violet-500/50"
  >
    Start Analyzing

    <ArrowRight
      size={18}
      className="transition-transform duration-300 group-hover:translate-x-1"
    />
  </button>

</div>
      </div>

    </section>
  );
}

