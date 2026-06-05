import Card from "./Card";
import { TriangleAlert } from "lucide-react";

const Weaknesses = ({
  weaknesses = [],
}) => {
  return (
    <Card className="border border-slate-700
       border-l-red-400 border-l-4">
     <div className="flex items-center gap-3 mb-6">
  <TriangleAlert
    size={24}
    className="text-red-400"
  />

  <h3 className="text-xl font-semibold text-white">
    Weaknesses
  </h3>
</div>

      <ul className="space-y-4">
        {weaknesses.map(
          (item, index) => (
            <li
              key={index}
              className="text-slate-300"
            >
              • {item}
            </li>
          )
        )}
      </ul>
    </Card>
  );
};

export default Weaknesses;