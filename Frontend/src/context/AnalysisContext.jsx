import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import api from "../components/api";



const AnalysisContext = createContext();

export const AnalysisProvider = ({ children }) => {

  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeResume = async (resume, jobDescription) => {

    if (!resume) {
      toast.error("Please upload a resume.");
      return;
    }

    if (!jobDescription.trim()) {
      toast.error("Please enter a job description.");
      return;
    }

    try {

      setLoading(true);

      const formData = new FormData();

      formData.append("resume", resume);
      formData.append("jobDescription", jobDescription);

      const { data } = await api.post(
        "/resume/upload",
        formData
      );

      setAnalysis(data.analysis);

      toast.success("Analysis completed");

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Something went wrong"
      );

    } finally {

      setLoading(false);

    }

  };

  return (
    <AnalysisContext.Provider
      value={{
        analysis,
        loading,
        analyzeResume,
      }}
    >
      {children}
    </AnalysisContext.Provider>
  );
};

export const useAnalysis = () =>
  useContext(AnalysisContext);