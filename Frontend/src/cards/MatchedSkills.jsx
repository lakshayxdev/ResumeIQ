import { CheckCircle2 } from "lucide-react";

const MatchedSkills = ({ skills }) => {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

      {/* Header */}

      <div className="flex items-center gap-3">

        <div className="rounded-xl bg-green-500/15 p-3">

          <CheckCircle2
            className="text-green-400"
            size={22}
          />

        </div>

        <div>

          <h3 className="text-lg font-semibold text-white">
            Matched Skills
          </h3>

          <p className="text-sm text-slate-400">
            Skills found in your resume
          </p>

        </div>

      </div>

      {/* Skills */}

      <div className="mt-8 flex flex-wrap gap-3">

        {skills?.length > 0 ? (

          skills.map((skill, index) => (

            <span
              key={index}
              className="
                rounded-full
                border
                border-green-500/20
                bg-green-500/10
                px-4
                py-2
                text-sm
                font-medium
                text-green-300
              "
            >
              {skill}
            </span>

          ))

        ) : (

          <p className="text-slate-400">
            No matched skills found.
          </p>

        )}

      </div>

    </div>
  );
};

export default MatchedSkills;