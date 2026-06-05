import Card from "./Card";

const MatchedSkills = ({
  skills = [],
}) => {
  return (
    <Card>
      <h3 className="text-white font-semibold mb-5">
        Matched Skills
      </h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="
              px-3
              py-2
              rounded-xl
              bg-green-500/10
              border
              border-green-500/20
              text-green-300
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

export default MatchedSkills;