import React from "react";

import ThrowBall from "../components/ThrowBall";

import NameBanner from "../components/NameBanner";

const Home = () => {
  return (
    <section className="scroll-container p-0">
      <div className="page-container">
        <div className="content-container">
          <ThrowBall />
        </div>
        <NameBanner />
      </div>
    </section>
  );
};

export default Home;
