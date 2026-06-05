import Card from "./Card";
import { Target } from "lucide-react";

const MissingSkills = ({
  skills = [],
}) => {
  return (
    <Card className="border border-slate-700
       border-l-red-400 border-l-4">
      <div className="flex items-center gap-3 mb-6">
  <Target
    size={24}
    className="text-amber-400"
  />

  <h3 className="text-xl font-semibold text-white">
    Missing Skills
  </h3>
</div>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="
              px-3
              py-2
              rounded-xl
              bg-red-500/10
              border
              border-red-500/20
              text-red-300
              text-sm
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </Card>
  );
};

export default MissingSkills;