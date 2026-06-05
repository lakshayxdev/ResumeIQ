import { useEffect, useState } from "react";
import { CheckCircle, Briefcase } from "lucide-react";

const JobFit = ({
  jobFit = "0%",
  matchedSkills = [],
}) => {
  const [progress, setProgress] = useState(0);

  const target =
    parseInt(jobFit?.toString().replace("%", "")) || 0;

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current += 1;

      if (current >= target) {
        current = target;
        clearInterval(interval);
      }

      setProgress(current);
    }, 15);

    return () => clearInterval(interval);
  }, [target]);

  return (
    <div className="bg-slate-900/60 backdrop-blur-xl  border border-slate-700
       border-l-cyan-500 border-l-4 rounded-3xl p-6 h-full  transition-all duration-300 hover:translate-y-1 hover:scale-[1.02]">
      
      <div className="flex items-center justify-between mb-6">

        <div className="flex items-center gap-3 mb-6">
  <Briefcase
    size={24}
    className="text-cyan-400"
  />

  <h3 className="text-xl font-semibold text-white">
    Job Compatibility
  </h3>
</div>

        <span className="text-4xl font-bold text-cyan-400">
          {progress}%
        </span>
      </div>

      
      <div className="w-full h-4 bg-slate-800 rounded-full overflow-hidden mb-8">
        <div
          className="h-full bg-cyan-400 rounded-full transition-all duration-300"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      {matchedSkills?.length > 0 && (
        <div>
          <h4 className="text-sm uppercase tracking-wider text-slate-400 font-semibold mb-4">
            Matched Skills
          </h4>

          <div className="flex flex-wrap gap-3">
            {matchedSkills.map((skill, index) => (
              <div
                key={index}
                className="
                  flex items-center gap-2
                  px-3 py-2
                  rounded-xl
                  bg-emerald-500/10
                  border border-emerald-500/20
                  text-emerald-300
                  text-sm
                  font-medium
                "
              >
                <CheckCircle size={14} />
                {skill}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default JobFit;