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

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <div className="xl:mx-[0] mt-[3rem] xl:mt-[4rem]">
        <Hero />
        <Invest />
        <CoreConcept />
        <InvestAnimation />
        <InvestEarn />
        <TokenUtility />
        <Tokenomics />
        <Technology />
        <Strategy />
        <RoadMap />
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
