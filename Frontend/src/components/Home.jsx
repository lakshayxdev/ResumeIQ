import { useState } from "react";
import toast from "react-hot-toast";
import Aurora from "./Aurora";

import ResumeUploader from "../components/ResumeUploader";
import JobDescriptionInput from "../components/JobDescriptionInput";
import AnalyzeSection from "../components/AnalyzeSection";
import DashboardSkeleton from "./DashboardSkeleton";

import LoginModal from "../components/LoginModal";
import SignupModal from "../components/SignupModal";

import Dashboard from "../components/Dashboard";

import api from "./api";

const Home = () => {
  const [resume, setResume] = useState(null);

  const [jobDescription, setJobDescription] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [analysis, setAnalysis] =
    useState(null);

  const [showLogin, setShowLogin] =
    useState(false);

  const [showSignup, setShowSignup] =
    useState(false);

  const handleAnalyze = async () => {
     if (!resume && !jobDescription) {
    toast.error("Please upload your resume and job description");
    return;
  }

  if (!resume) {
    toast.error("Please upload your resume");
    return;
  }

  if (!jobDescription) {
    toast.error("Please write job description");
    return;
  }
  
    const token= localStorage.getItem("token")
   console.log(
  "TOKEN:",
 token
);

    if (!token) {
  console.log("OPENING LOGIN");
  setShowLogin(true);
  return;
}

    if (!resume) {
      alert("Please upload a resume");
      return;
    }

    if (!jobDescription.trim()) {
      alert(
        "Please enter a job description"
      );
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append(
        "resume",
        resume
      );

      formData.append(
        "jobDescription",
        jobDescription
      );

      

      for(let pair of formData.entries()) {
        console.log(pair[0],pair[1]);
      }

      const { data } = await api.post(
        "/api/resume/upload",
        formData,
      );

     

      setAnalysis(data.analysis);
       toast.success("Analysis completed");
    } catch (error) {
      console.log(error);

      alert(
        error?.response?.data?.message ||
          "Analysis Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
  <>
   
    <section className="relative z-10 flex min-h-[60vh] flex-col items-center justify-center px-6 pt-20 pb-16 text-center overflow-hidden bg-[#050816]">

    
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="absolute inset-x-0 top-[40%] h-300px opacity-80 blur-[60px]">
        <Aurora
          colorStops={[
            "#06B6D4",
            "#3B82F6",
            "#8B5CF6",
          ]}
          blend={0.5}
          amplitude={3}
          speed={1}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center">

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
        bg-cyan-400
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

        <h1 className="max-w-6xl text-4xl
sm:text-5xl
md:text-7xl
lg:text-8xl
font-bold
leading-tight
text-white">
          Optimize Your Resume
          <br />

          <span className="text-slate-300 text-4xl
sm:text-5xl
md:text-7xl
lg:text-8xl
font-bold
leading-tight">
            With
          </span>

          <br />

          <div className="mt-4 inline-block rounded-2xl border border-violet-400/30 bg-violet-500/10 px-4 py-2 sm:px-6 sm:py-3 backdrop-blur-sm shadow-[0_0_30px_rgba(34,211,238,0.25)]">
  <span className="bg-linear-to-r from-violet-400 to-blue-500 bg-clip-text text-transparent">
    AI Precision
  </span>
</div>
        </h1>

        <p className="mt-6 max-w-2xl text-sm sm:text-base md:text-lg text-slate-400">
          Analyze your resume against real-world job descriptions
          and improve ATS compatibility with AI-powered insights.
        </p>

      </div>

    </section>

    
    <div className="max-w-7xl mx-auto px-6 py-12">

      <div className="grid lg:grid-cols-2 gap-6">

        <ResumeUploader
          resume={resume}
          setResume={setResume}
        />

        <JobDescriptionInput
          jobDescription={jobDescription}
          setJobDescription={setJobDescription}
        />

      </div>

      
      <div className="mt-8">
        <AnalyzeSection
          handleAnalyze={handleAnalyze}
          loading={loading}
        />
      </div>

      {loading ? (
        <div className="py-8">
          <DashboardSkeleton />
        </div>
      ) : (
        <div className="py-8">
          <Dashboard analysis={analysis} />
        </div>
      )}

    </div>

    
    <LoginModal
      isOpen={showLogin}
      onClose={() => setShowLogin(false)}
      openSignup={() => {
        setShowLogin(false);
        setShowSignup(true);
      }}
    />

   
    <SignupModal
      isOpen={showSignup}
      onClose={() => setShowSignup(false)}
      openLogin={() => {
        setShowSignup(false);
        setShowLogin(true);
      }}
    />
  </>
);
};

export default Home;



