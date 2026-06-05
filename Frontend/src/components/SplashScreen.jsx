import { useEffect, useState } from "react";

const SplashScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            onFinish();
          }, 200);

          return 100;
        }

        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 bg-slate-950 flex flex-col items-center justify-center z-50">

      <h1 className="text-5xl font-bold text-white mb-8">
        Resume<span className="text-violet-700">IQ</span>
      </h1>

      <div className="w-72 h-2 bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-violet-700 transition-all duration-75"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      <p className="text-slate-400 mt-4">
        {progress}%
      </p>

    </div>
  );
};

export default SplashScreen;