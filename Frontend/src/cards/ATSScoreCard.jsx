import { Target } from "lucide-react";

const ATSScoreCard = ({ score = 0 }) => {
  const getColor = () => {
    if (score >= 80) return "text-green-400";
    if (score >= 60) return "text-yellow-400";
    return "text-red-400";
  };

  const getMessage = () => {
    if (score >= 80) return "Excellent Resume";
    if (score >= 60) return "Needs Improvement";
    return "Poor ATS Match";
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 h-full">

      {/* Header */}

      <div className="flex items-center gap-3">

        <div className="rounded-xl bg-violet-500/15 p-3">

          <Target
            className="text-violet-400"
            size={24}
          />

        </div>

        <div>

          <h3 className="text-lg font-semibold text-white">
            ATS Score
          </h3>

          <p className="text-sm text-slate-400">
            Resume Compatibility
          </p>

        </div>

      </div>

      {/* Score */}

      <div className="mt-10 flex justify-center">

        <div className="relative flex h-44 w-44 items-center justify-center rounded-full border-[10px] border-violet-500/20">

          <div className="text-center">

            <h1
              className={`text-5xl font-bold ${getColor()}`}
            >
              {score}%
            </h1>

            <p className="mt-2 text-sm text-slate-400">

              ATS Match

            </p>

          </div>

        </div>

      </div>

      {/* Status */}

      <div className="mt-8 rounded-2xl bg-violet-500/10 py-3 text-center">

        <span
          className={`font-medium ${getColor()}`}
        >
          {getMessage()}
        </span>

      </div>

    </div>
  );
};

export default ATSScoreCard;