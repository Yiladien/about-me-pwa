import React from "react";

import ThrowBall from "../components/ThrowBall";

const Home = ({ marginTop, marginBottom }) => {
  return (
    <section
      className="scroll-container"
      style={{
        marginTop: marginTop,
        marginBottom: marginBottom,
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
