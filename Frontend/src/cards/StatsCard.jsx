import { TrendingUp } from "lucide-react";

const StatsCard = ({ title, value, icon: Icon, color }) => {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:border-violet-500/30 hover:shadow-[0_0_30px_rgba(139,92,246,.15)]">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-slate-400 text-lg">{title}</p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            {value}
          </h2>

          {/* <div className="mt-4 flex items-center gap-2 text-sm text-green-400">
            <TrendingUp size={16} />
            <span>Updated Live</span>
          </div> */}

         <div className="flex items-center gap-2 mt-4">
  <span className="relative flex h-2.5 w-2.5">
    {/* Pulse */}
    <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>

    {/* Solid Dot */}
    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
  </span>

  <span className="text-green-400 text-sm font-medium">
   Updated Live
  </span>
</div>


        </div>

        <div className={`rounded-2xl p-4 ${color}`}>
          <Icon size={30} />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;