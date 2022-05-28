import React from "react";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "components/ThirdSection";
import Contact from "components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <Contact />
      <Footer />
    </div>
  );
}
