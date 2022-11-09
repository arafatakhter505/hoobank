import "./App.css";
import Billing from "./components/Billing/Billing";
import Business from "./components/Business/Business";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview/Overview";
import CardDeal from "./components/CardDeal/CardDeal";
import About from "./components/About/About";
import Clients from "./components/Clients/Clients";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Overview />
      <Business />
      <Billing />
      <CardDeal />
      <About />
      <Clients />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
