import { useEffect, useState } from "react";
import { FileText, Target, FileSearch } from "lucide-react";
import api from "../components/api";
import StatsCard from "../cards/StatsCard";
import RecentAnalysisCard from "../cards/RecentAnalysisCard";
import DashboardSkeleton from "../skeleton/DashboarSkeleton";
import FadeUp from "../components/FadeUp";
const Dashboard = () => {

  const user = JSON.parse(localStorage.getItem("user"));

  const [dashboard, setDashboard] = useState({
    totalAnalysis: 0,
    averageATS: 0,
    recentAnalysis: [],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchDashboard = async () => {

      try {

        const { data } = await api.get("/api/dashboard");
        console.log(data);
        setDashboard({
  totalAnalysis: data.totalAnalysis,
  averageATS: data.averageATS,
  recentAnalysis: data.recentAnalysis,
});

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }

    };

    fetchDashboard();

  }, []);

  if (loading) {
    return (
     <DashboardSkeleton />
    );
  }

  return (
    <section className="min-h-screen bg-[#070B16] p-8">

      <div className="mb-10">

        <h1 className="text-4xl font-bold text-white">
          Welcome Back 
          <span className="text-4xl font-bold text-violet-500"> {user?.name} 👋</span>
        </h1>

        <p className="mt-3 text-slate-400">
          Track your resume performance with AI-powered insights.
        </p>

      </div>

      <FadeUp>

      <div className="grid gap-6 md:grid-cols-2">

        <StatsCard
          title="Total Analysis"
          value={dashboard.totalAnalysis}
          icon={FileText}
          color="bg-violet-500/15 text-violet-400"
        />

        <StatsCard
          title="Average ATS Score"
          value={`${dashboard.averageATS}%`}
          icon={Target}
          color="bg-fuchsia-500/15 text-fuchsia-400"
        />

      </div>
      </FadeUp>


      <div className="mt-14">

        <div className="mb-8 flex items-center justify-between">

          <h2 className="text-2xl font-semibold text-white">
            Recent Analysis
          </h2>

        </div>

       {dashboard.recentAnalysis.length > 0 ? (
<FadeUp>
  <div className="grid gap-6 lg:grid-cols-3">
    {dashboard.recentAnalysis.map((analysis) => (
      <RecentAnalysisCard
        key={analysis._id}
        analysis={analysis}
      />
    ))}
  </div>
  </FadeUp>

) : (

  <div className="flex min-h-[400px] w-full items-center justify-center">
    <div className="text-center">
      <div className="mb-6 flex justify-center">
        <div className="rounded-full bg-violet-500/10 p-6">
          <FileSearch
            size={50}
            className="text-violet-500"
          />
        </div>
      </div>

      <h2 className="text-3xl font-bold text-white">
        No Recent Analysis
      </h2>

      <p className="mt-4 max-w-md text-gray-400">
        Start by analyzing your first resume. Your latest analyses
        will appear here for quick access.
      </p>
    </div>
  </div>

)}

      </div>

    </section>
  );
};

export default Dashboard;