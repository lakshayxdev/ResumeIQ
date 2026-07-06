


import { useEffect, useState } from "react";
import api from "../components/api";
import {
  Trash,
  FileText,
  Briefcase,
  CalendarDays,
} from "lucide-react";
import { FaHistory } from "react-icons/fa";
import FadeUp from "../components/FadeUp";
import toast from "react-hot-toast";
import HistorySkeleton from "../skeleton/HistorySkeleton";

const History = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        setLoading(true);
        const res = await api.get("/api/history");
        setHistory(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  const deleteHistory = async (id) => {
    try {
      await api.delete(`/api/history/${id}`);

      setHistory((prev) =>
        prev.filter((item) => item._id !== id)
      );

      toast.success("Deleted Successfully");
    } catch (err) {
      console.log(err);
    }
  };

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

    const month = d.toLocaleString("default", {
      month: "long",
    });

    const year = d.getFullYear();

    return `${day}${suffix} ${month} ${year}`;
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white px-6 md:px-10 py-10">
      <h1 className="text-3xl font-bold mb-8">
        Analysis History
      </h1>

      {loading ? (
        <HistorySkeleton />
      ) : history.length === 0 ? (
        <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
          <div className="mb-6 rounded-full bg-violet-500/10 p-6">
            <FaHistory
              size={48}
              className="text-violet-500"
            />
          </div>

          <h2 className="text-3xl font-bold">
            No Analysis History
          </h2>

          <p className="mt-3 max-w-md text-gray-400">
            You haven't analyzed any resumes yet.
            Once you analyze a resume,
            your history will appear here.
          </p>
        </div>
      ) : (
        <FadeUp>
        <div className="space-y-5">
          {history.map((item) => (
            <div
              key={item._id}
              className="bg-[#141B2D]
              border border-gray-700
              rounded-2xl
              p-5
              flex
              items-start
              gap-5
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-violet-500/40
              hover:shadow-[0_0_25px_rgba(139,92,246,0.15)]"
            >
              {/* Left */}

              <div className="flex-1 min-w-0">

                {/* Resume Name */}

                <div className="flex items-center gap-2 min-w-0">
                  <FileText
                    size={18}
                    className="text-violet-400 shrink-0"
                  />

                  <h2 className="text-lg md:text-xl font-semibold text-white truncate">
                    {item.resumeName}
                  </h2>
                </div>

                {/* Role */}

                <div className="mt-4 flex items-center gap-2">
                  <Briefcase
                    size={16}
                    className="text-gray-400 shrink-0"
                  />

                  <p className="text-sm text-gray-300 truncate">
                    Role : {item.role}
                  </p>
                </div>

                {/* Date */}

                <div className="mt-3 flex items-center gap-2">
                  <CalendarDays
                    size={15}
                    className="text-gray-500 shrink-0"
                  />

                  <p className="text-xs text-gray-500">
                    {formatDate(item.createdAt)}
                  </p>
                </div>

              </div>

              {/* Right */}

              <div className="flex flex-col items-end justify-between gap-4 shrink-0">

                <div className="rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1">
                  <span className="text-xs font-semibold text-green-400">
                    ATS {item.atsScore}%
                  </span>
                </div>

                <button
                  onClick={() => deleteHistory(item._id)}
                  className="rounded-full p-2 hover:bg-red-500/10 transition"
                >
                  <Trash
                    size={17}
                    className="text-red-500"
                  />
                </button>

              </div>
            </div>
           
          ))}
        </div>
         </FadeUp>
      )}
    </div>
  );
};

export default History;