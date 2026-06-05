import { Sparkles } from "lucide-react";

const Suggestions = ({
  suggestions = [],
}) => {
  if (!suggestions?.length) return null;

  return (
    <div className="space-y-6">
     
      <div className="flex items-center gap-4">
        <div
          className="
          
          flex items-center justify-center
        "
        >
          <Sparkles
            size={22}
            className="text-violet-400"
          />
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-white">
            AI Suggestions
          </h3>

          <p className="text-slate-400 text-sm">
            Recommended improvements to
            increase ATS score and job fit.
          </p>
        </div>
      </div>

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        gap-5
       
      "
      >
        {suggestions.map(
          (suggestion, index) => (
            <div
              key={index}
              className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-slate-800
              bg-slate-900/60
              backdrop-blur-xl
              p-6
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-violet-500/40
              hover:shadow-lg
              hover:shadow-violet-500/10
            "
            >
              
              <div
                className="
                mb-5
                w-11 h-11
                rounded-xl
                bg-violet-500/10
                border
                border-violet-500/20
                flex
                items-center
                justify-center
                text-violet-400
                font-bold
              "
              >
                {String(
                  index + 1
                ).padStart(2, "0")}
              </div>

            
              <p
                className="
                text-slate-400
                leading-relaxed
              "
              >
                {suggestion}
              </p>

            
              <div
                className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-300
                bg-linear-to-r
                from-violet-500/5
                to-transparent
                pointer-events-none
              "
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Suggestions;