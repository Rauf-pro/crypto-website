import React, { useEffect } from "react";

// import components
import Hero from "./components/Hero";

// import aos
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  // aos init
  useEffect(() => {
    Aos.init({ duration: 1000, delay: 400 });
  }, []);

  return (
    <div className="overflow-hidden">
      <Hero />
    </div>
  );
};

export default App;
