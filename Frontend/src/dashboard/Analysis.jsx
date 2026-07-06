// import ResumeUploader from "../components/ResumeUploader";
// import JobDescriptionInput from "../components/JobDescriptionInput";
// import AnalyzeSection from "../cards/AnalyzeSection";
// import GradientButton from "../components/GradientButton";

// import { useAnalysis } from "../context/AnalysisContext";

// const Analysis = () => {

//   const {
//     analysis,
//     loading,
//     analyzeResume,
//     resume,
//     setResume,
//     jobDescription,
//     setJobDescription,
//   } = useAnalysis();

//   return (
//     <section className="min-h-screen bg-[#070B16] p-8">

//       <div className="mb-10">

//         <h1 className="text-4xl font-bold text-white">
//           Analyze Resume
//         </h1>

//         <p className="mt-3 max-w-2xl text-slate-400">
//           Upload your resume and compare it with a job description
//           to receive AI-powered ATS insights.
//         </p>

//       </div>

//       <div className="grid gap-6 lg:grid-cols-2">

//         <ResumeUploader
//           resume={resume}
//           setResume={setResume}
//         />

//         <JobDescriptionInput
//           value={jobDescription}
//           onChange={(e) =>
//             setJobDescription(e.target.value)
//           }
//         />

//       </div>

//       <div className="mt-8 flex justify-center">

//         <GradientButton
//           loading={loading}
//           onClick={analyzeResume}
//         >
//           Analyze
//         </GradientButton>

//       </div>

//       <AnalyzeSection
//         analysis={analysis}
//       />

//     </section>
//   );
// };

// export default Analysis;


import ResumeUploader from "../components/ResumeUploader"
import JobDescriptionInput from "../components/JobDescriptionInput"
import toast from "react-hot-toast";
import { useState } from "react";
import AnalyzeSection from "../components/AnalyzeSection";
import api from "../components/api";
import Dashboard from "../analysisOutput/Dashboard";
import DashboardSkeleton from "../analysisOutput/DashboardSkeleton";
import { HiOutlineSparkles } from "react-icons/hi2";


const Analysis = () => {

    const [resume, setResume] = useState(null);
  const [jobDescription, setJobDescription] =
    useState("");
  const [loading, setLoading] =
    useState(false);
  const [analysis, setAnalysis] =
    useState(null);
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
    <div className="max-w-7xl mx-auto px-6 py-12">

         {/* Heading */}
<div className="mb-10">
  <span className="inline-flex items-center rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1 text-sm font-medium text-violet-400">
  
    AI Powered Resume Analysis
  </span>

  <h1 className="flex items-center gap-2 mt-6 text-4xl md:text-5xl font-bold tracking-tight bg-linear-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
    <HiOutlineSparkles size={50} className="text-violet-500"/>
    Analyze Your Resume
  </h1>

  <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-400">
    Upload your resume and compare it against any job description to receive an
    ATS compatibility score, identify missing keywords, evaluate matched skills,
    and get personalized AI suggestions to improve your chances of landing
    interviews.
  </p>
</div>

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
      </>
  )
}

export default Analysis