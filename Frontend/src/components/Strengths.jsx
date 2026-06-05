import Card from "./Card";
import { ShieldCheck } from "lucide-react";

const Strengths = ({
  strengths = [],
}) => {
  return (
    <Card className="border border-slate-700
       border-l-green-500 border-l-4">
     <div className="flex items-center gap-3 mb-6">
  <ShieldCheck
    size={24}
    className="text-emerald-400"
  />

  <h3 className="text-xl font-semibold text-white">
    Strengths
  </h3>
</div>

      <ul className="space-y-4">
        {strengths.map(
          (strength, index) => (
            <li
              key={index}
              className="text-slate-300"
            >
              
              • {strength}
            </li>
          )
        )}
      </ul>
    </Card>
  );
};

export default Strengths;