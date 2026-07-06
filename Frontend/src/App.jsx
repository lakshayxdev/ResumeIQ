

import AppRoutes from "./routes/AppRoutes"
import { AnalysisProvider } from "./context/AnalysisContext"
// import { useState } from "react"
// import SplashScreen from "./components/SplashScreen";

// const App = () => {
//   const [loading, setLoading] = useState(true);
//   return (
//     <>
//     {loading? (
//       <SplashScreen onFinish={() => setLoading(false)}/>
//     ) : (
    //    <AnalysisProvider>
    // <AppRoutes />
    // </AnalysisProvider>
//     )
//   }
   
//     </>
//   )
// }

// export default App

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