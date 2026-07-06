const DashboardSkeleton = () => {
  return (
    <div className="animate-pulse">
      {/* Heading */}
      <div className="mb-10">
        <div className="h-10 w-72 rounded bg-[#1A2032]"></div>

        <div className="mt-4 h-5 w-96 rounded bg-[#1A2032]"></div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {[1, 2].map((item) => (
          <div
            key={item}
            className="rounded-3xl border border-white/10 bg-[#111623] p-10"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="mb-5 h-5 w-40 rounded bg-[#1A2032]"></div>

                <div className="mb-6 h-14 w-28 rounded bg-[#1A2032]"></div>

                <div className="h-5 w-36 rounded bg-[#1A2032]"></div>
              </div>

              <div className="h-20 w-20 rounded-3xl bg-[#2A1F4A]"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Analysis */}
      <div className="mt-16">
        <div className="mb-8 h-10 w-64 rounded bg-[#1A2032]"></div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-white/10 bg-[#111623] p-8"
            >
              {/* Icon */}
              <div className="mb-8 h-14 w-14 rounded-2xl bg-[#2A1F4A]"></div>

              {/* Resume Name */}
              <div className="mb-5 h-7 w-56 rounded bg-[#1A2032]"></div>

              {/* Role */}
              <div className="mb-3 h-5 w-64 rounded bg-[#1A2032]"></div>

              <div className="mb-8 h-5 w-52 rounded bg-[#1A2032]"></div>

              {/* Bottom */}
              <div className="flex items-center justify-between">
                <div className="h-9 w-28 rounded-full bg-[#1B5E3B]"></div>

                <div className="h-5 w-28 rounded bg-[#1A2032]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardSkeleton;