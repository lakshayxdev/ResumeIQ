import { Calendar, FileText } from "lucide-react";

const RecentAnalysisCard = ({ analysis }) => {
  const formatDate = (date) => {
  const d = new Date(date);

  const day = d.getDate();

  const suffix =
    day % 10 === 1 && day !== 11
      ? "st"
      : day % 10 === 2 && day !== 12
      ? "nd"
      : day % 10 === 3 && day !== 13
      ? "rd"
      : "th";

  const month = d.toLocaleString("default", { month: "long" });
  const year = d.getFullYear();

  return `${day}${suffix} ${month} ${year}`;
};
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:shadow-[0_0_30px_rgba(139,92,246,.15)]">

      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/15">
        <FileText className="text-violet-400" size={22} />
      </div>

      <h3 className="truncate text-lg font-semibold text-white">
        {analysis.resumeName}
      </h3>

      <p className="mt-2 text-slate-400">
       Role : {analysis.role}
      </p>

      <div className="mt-6 flex items-center justify-between">

        <span className="rounded-full bg-green-500/15 px-3 py-1 text-sm font-medium text-green-400">
          ATS {analysis.atsScore}%
        </span>

        <div className="flex items-center gap-1 text-sm text-slate-500">
          <Calendar size={15} />

          {/* {new Date(analysis.createdAt).toLocaleDateString()} */}
          {formatDate(analysis.createdAt)}
        </div>

      </div>

    </div>
  );
};

export default RecentAnalysisCard;