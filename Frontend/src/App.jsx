import AppRoutes from "./routes/AppRoutes"
import { AnalysisProvider } from "./context/AnalysisContext"
import { useEffect, useState } from "react";
import Preloader from "./preloader/PreLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("visited");

    if (!hasVisited) {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("visited", "true");
      }, 2000);
    }
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      <AnalysisProvider>
    <AppRoutes />
    </AnalysisProvider>
    </>
  );
}

export default App;
