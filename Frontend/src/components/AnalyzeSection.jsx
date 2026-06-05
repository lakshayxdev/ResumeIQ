
import GradientButton from "./GradientButton";
import { Zap } from "lucide-react";

const AnalyzeSection = ({
  handleAnalyze,
  loading,
}) => {
  return (
    <GradientButton
      onClick={handleAnalyze}
      className="w-full py-4 mt-6 gap-3"
    >
      {loading
        ? "Analyzing..."
        : (
          <>
          Analyze Resume
          <Zap size={18}/>
          </>
        )}
    </GradientButton>
  );
};

export default AnalyzeSection;