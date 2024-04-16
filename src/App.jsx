import React from "react";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import Marquee from "./components/Marquee";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Counter from "./components/Counter";
import LocomotiveScroll from "locomotive-scroll";
import Headroom from "react-headroom";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="tracking-tightest bg-light text-dark">
      {/* <div className="box hidden w-full h-full fixed z-9 backdrop-blur-sm bg-dark/30 "></div> */}
      <Headroom>
        <Nav />
      </Headroom>
      <Landing />
      <Marquee />
      <Projects />
      <Footer />
      {/* <Counter /> */}
    </div>
  );
}

export default App;
