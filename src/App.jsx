import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Programs from "./components/programs/Programs";
import Title from "./components/title/Title";
import About from "./components/about/About";
import Campus from "./components/campus/campus";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import VideoPlayer from "./components/videoPlayer/VideoPlayer";

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our PROGRAM" title="What We Offer" />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subTitle="Gallery" title="Campus Photos" />
        <Campus />
        <Title subTitle="TESTIMONIALS" title="What Student Says" />
        <Testimonials />
        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
