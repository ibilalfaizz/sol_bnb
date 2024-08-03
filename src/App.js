import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/banner/Hero";
import Invest from "./components/invest/Invest";
import CoreConcept from "./components/coreconcept/CoreConcept";
import InvestEarn from "./components/investearn/InvestEarn";
import TokenUtility from "./components/tokenutility/TokenUtility";
import Tokenomics from "./components/tokenomics/Tokenomics";
import Technology from "./components/technology/Technology";
import Strategy from "./components/strategy/Strategy";
import RoadMap from "./components/roadmap/RoadMap";
import Legal from "./components/legal/Legal";
import Risk from "./components/risk/Risk";
import Partners from "./components/partners/Partners";
import Faq from "./components/faq/Faq";
import Footer from "./components/footer/Footer";
import InvestAnimation from "./components/invest/InvestAnimation";
import HeroMobile from "./components/banner/HeroMobile";
import { useEffect, useState } from "react";
import RoadmapMobile from "./components/roadmap/RoadmapMobile";
import Roadmap from "./components/roadmap/RoadMap";

function App() {
  const [mobile, setMobile] = useState(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    console.log(windowWidth);
    if (windowWidth < 900) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [window.innerWidth]);

  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <div className="xl:mx-[0] mt-[3rem] xl:mt-[4rem]">
        {!mobile ? (
          <div className="w-[100vw] h-[100vh] -mt-28 flex flex-col justify-center">
            <Hero />
          </div>
        ) : (
          <div>
            <HeroMobile />
          </div>
        )}
        <Invest />
        <CoreConcept />
        <InvestAnimation />
        <InvestEarn />
        <TokenUtility />
        <Tokenomics />
        <Technology />
        <Strategy />
        {!mobile ? <Roadmap /> : <RoadmapMobile />}
        <Legal />
        <Risk />
        <Partners />
        <Faq />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
