import { useEffect, useState } from "react";
import { FaBrain } from "react-icons/fa";

const Preloader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += 2;
      setProgress(value);

      if (value >= 100) {
        clearInterval(interval);
      }
    }, 50); // 100 * 50ms = 5s (adjust below)
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0B0F19]">

       <div className="flex items-center gap-3 select-none">
                      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-700 shadow-lg shadow-cyan-500/30">
                        <FaBrain className="text-white text-2xl" />
                      </div>
                
                      <div>
                        <h1 className="text-xl md:text-2xl font-bold tracking-tight text-white">
                          Resume
                          <span className="text-violet-500">IQ</span>
                        </h1>
                      </div>
                    </div>

      <div className="w-80 h-2 rounded-full bg-[#1D2435] overflow-hidden mt-5">

        <div
          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 transition-all duration-75"
          style={{ width: `${progress}%` }}
        />

      </div>

      <p className="mt-4 text-gray-400 text-sm">
        Loading... {progress}%
      </p>

    </div>
  );
};

export default Preloader;