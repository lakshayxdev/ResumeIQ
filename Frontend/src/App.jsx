import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Features from "./components/Features";
import FadeUp from "./components/FadeUp";
import SplashScreen from "./components/SplashScreen";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <SplashScreen
          onFinish={() => setLoading(false)}
        />
      ) : (
        <div className="min-h-screen bg-[#070B14]">

          <Navbar />
         

          <FadeUp>
            <Home />
          </FadeUp>

          <FadeUp>
            <Features />
          </FadeUp>

          <Footer />

        </div>
      )}
    </>
  );
}

export default App;