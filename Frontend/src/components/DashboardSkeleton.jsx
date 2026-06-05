const DashboardSkeleton = () => {
  return (
    <div className="space-y-8 animate-pulse">

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="h-72 bg-slate-800 rounded-2xl"></div>

        <div className="lg:col-span-2 space-y-6">
          <div className="h-32 bg-slate-800 rounded-2xl"></div>
          <div className="h-32 bg-slate-800 rounded-2xl"></div>
        </div>
      </div>

      <div className="h-48 bg-slate-800 rounded-2xl"></div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="h-40 bg-slate-800 rounded-2xl"></div>
        <div className="h-40 bg-slate-800 rounded-2xl"></div>
      </div>

    </div>
  );
};

export default DashboardSkeleton;