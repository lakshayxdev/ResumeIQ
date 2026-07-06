import { BriefcaseBusiness, TrendingUp } from "lucide-react";

const JobFit = ({ jobFit, matchedSkills }) => {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

      {/* Header */}

      <div className="flex items-center gap-3">

        <div className="rounded-xl bg-green-500/15 p-3">

          <BriefcaseBusiness
            className="text-green-400"
            size={22}
          />

        </div>

        <div>

          <h3 className="text-lg font-semibold text-white">
            Job Fit
          </h3>

          <p className="text-sm text-slate-400">
            Overall compatibility
          </p>

        </div>

      </div>

      {/* Percentage */}

      <div className="mt-8 flex items-center justify-between">

        <div>

          <h1 className="text-5xl font-bold text-green-400">
            {jobFit}
          </h1>

          <p className="mt-2 text-slate-400">
            Overall Match
          </p>

        </div>

        <TrendingUp
          className="text-green-400"
          size={42}
        />

      </div>

      {/* Footer */}

      <div className="mt-8 rounded-2xl bg-green-500/10 px-4 py-3 text-sm text-green-300">

        {matchedSkills?.length || 0} matching skills detected.

      </div>

    </div>
  );
};

export default JobFit;