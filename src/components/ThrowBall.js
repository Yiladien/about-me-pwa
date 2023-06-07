import React from "react";

//bootstrap
import Image from "react-bootstrap/Image";

import {
  // throwball50,
  // throwball25,
  // throwball10,
  // throwballNoBall50,
  // throwballNoBall25,
  // throwballNoBall10,
  // throwballBall50,
  // throwballBall25,
  // throwballBall10,
  throwball50Vert,
  // throwball25Vert,
  // throwball10Vert,
  throwballNoBall50Vert,
  // throwballNoBall25Vert,
  throwballNoBall10Vert,
  throwballBall50Vert,
  // throwballBall25Vert,
  throwballBall10Vert,
  ball50,
  ball25,
  ball10,
} from "../assets/images/jumbo/";

import { motion } from "framer-motion";

const ThrowBall = () => {
  // const ballAnimationSettings = {
  //   duration: 2,
  // vertical: {
  //   originX: 26.3,
  //   originY: 22.2,
  // },
  // horizontal: {
  //   originX: 32.1,
  //   originY: 22.2,
  // },
  //   vertical: {
  //     originX: 26.3,
  //     originY: 22.2,
  //   },
  //   horizontal: {
  //     originX: 32.1,
  //     originY: 22.2,
  //   },
  // };

  return (
    <div id="full-container">
      <div id="image-container">
        <Image
          id="throw-no-ball"
          src={throwballNoBall50Vert}
          alt="madison-olguin"
          className="drop-shadow"
        />
        <Image
          id="ball"
          src={throwballBall50Vert}
          alt="madison-olguin"
          className="drop-shadow"
        />
      </div>
    </div>
  );
};

export default ThrowBall;
