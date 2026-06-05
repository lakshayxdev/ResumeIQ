import { useEffect, useState } from "react";
import { Gauge } from "lucide-react";

const ATSScoreCard = ({ score = 0 }) => {
  const finalScore = Number(score) || 0;

  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 1500;
    const steps = 60;
    const increment = finalScore / steps;

    const timer = setInterval(() => {
      start += increment;

      if (start >= finalScore) {
        setAnimatedScore(finalScore);
        clearInterval(timer);
      } else {
        setAnimatedScore(Math.round(start));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [finalScore]);

  const radius = 70;
  const circumference = 2 * Math.PI * radius;

  const dashOffset =
    circumference * (1 - animatedScore / 100);

    

  return (
    <div
      className="
        bg-slate-900/60
        backdrop-blur-xl
        border border-slate-700
       border-l-purple-500 border-l-4
        rounded-3xl
        p-6
        h-full
        flex
        flex-col
        transition-all duration-300 hover:translate-y-1 hover:scale-[1.02]
      "
    >
      
     <div className="flex items-center gap-2 mb-6">
  <Gauge
    size={22}
    className="text-violet-400"
  />

  <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-semibold">
    ATS Readiness
  </p>
</div>

     
      <div className="flex-1 flex items-center justify-center">
        <div className="relative">
          <svg width="200" height="200">
           
            <circle
              cx="100"
              cy="100"
              r={radius}
              fill="none"
              stroke="#1e293b"
              strokeWidth="14"
            />

            
            <circle
              cx="100"
              cy="100"
              r={radius}
              fill="none"
              stroke="#8b5cf6"
              strokeWidth="14"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              transform="rotate(-90 100 100)"
              style={{
                transition:
                  "stroke-dashoffset 0.8s ease-out",
                filter:
                "drop-shadow(0px 0px 2px #8b5cf6)",
              }}
            />
          </svg>

          
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h2 className="text-5xl font-bold text-white">
              {animatedScore}
            </h2>

            <p className="text-slate-400 text-lg">
              /100
            </p>
          </div>
        </div>
      </div>

      
      <p className="text-center text-slate-300 leading-relaxed">
        {finalScore >= 80
          ? "Your resume is highly optimized for ATS systems."
          : finalScore >= 60
          ? "Your resume is reasonably optimized but can be improved."
          : "Your resume needs optimization to improve ATS performance."}
      </p>
    </div>
  );
};

export default ATSScoreCard;