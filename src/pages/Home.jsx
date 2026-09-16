import React from "react";
import Video from "../components/home/Video";
import HomeHeroText from "../components/home/HomeHeroText";
import HomeBottomText from "../components/home/HomeBottomText";

const Home = () => {
  return (
    <div className="h-screen w-screen overflow-hidden">

      {/* Background Video */}
      <div className="fixed inset-0 z-0 h-screen w-screen">
        <Video />
      </div>

      {/* Home Content */}
      <div className="relative z-10 flex h-screen w-screen flex-col justify-between overflow-hidden pb-5">
        <HomeHeroText />
        <HomeBottomText />
      </div>

    </div>
  );
};

export default Home;