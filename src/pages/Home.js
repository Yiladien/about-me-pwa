import React from "react";

import ThrowBall from "../components/ThrowBall";

const Home = ({ paddingTop, paddingBottom }) => {
  return (
    <section
      className="scroll-container"
      style={{
        paddingTop: paddingTop,
        paddingBottom: paddingBottom,
      }}
    >
      <div className="page-container">
        <div className="content-container">
          <ThrowBall />
        </div>
      </div>
    </section>
  );
};

export default Home;
