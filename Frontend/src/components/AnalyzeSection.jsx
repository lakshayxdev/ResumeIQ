import GradientButton from "./GradientButton";
import { Zap } from "lucide-react";

const AnalyzeSection = ({
  handleAnalyze,
  loading,
}) => {
  return (
    <GradientButton
      onClick={handleAnalyze}
      disabled={loading}
      className="w-full py-4 mt-6 gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {loading ? (
        "Analyzing..."
      ) : (
        <>
          Analyze Resume
          <Zap size={18} />
        </>
      )}
    </GradientButton>
  );
};

export default AnalyzeSection;