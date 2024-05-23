import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import NavbarMenu from "./components/NavbarMenu";
import Hero from "./components/Hero";
import WhyUs from "./components/WhyUs";
import AboutUs from "./components/AboutUs";
import Clients from "./components/Clients";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  return (
    <div className=" flex flex-col min-h-screen">
      <NavbarMenu />
      <div className=" flex-1">
        <Hero />
        <WhyUs />
        <AboutUs />
        <Services />
        <Clients />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
