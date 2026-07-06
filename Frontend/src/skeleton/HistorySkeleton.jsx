const HistorySkeleton = () => {
  return (
    <div className="space-y-5">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="animate-pulse bg-[#141B2D] border border-gray-700 rounded-xl px-4 py-4 flex justify-between items-start"
        >
          {/* Left Side */}
          <div className="flex-1">
            {/* Resume Name */}
            <div className="h-5 w-48 bg-gray-700 rounded mb-3"></div>

            {/* Role */}
            <div className="h-4 w-64 bg-gray-700 rounded mb-2"></div>

            {/* Date */}
            <div className="h-3 w-28 bg-gray-700 rounded"></div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-6 ml-4">
            {/* ATS */}
            <div className="text-center">
              <div className="h-8 w-14 bg-gray-700 rounded mb-2"></div>
              <div className="h-3 w-10 bg-gray-700 rounded mx-auto"></div>
            </div>

            {/* Delete Icon */}
            <div className="h-5 w-5 bg-gray-700 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HistorySkeleton;