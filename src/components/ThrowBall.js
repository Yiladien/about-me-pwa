import React from "react";

//bootstrap
import Image from "react-bootstrap/Image";

import {
  throwball50Vert,
  throwball25Vert,
  throwball10Vert,
  throwballNoBall50Vert,
  throwballNoBall25Vert,
  throwballNoBall10Vert,
  throwballBall50Vert,
  throwballBall25Vert,
  throwballBall10Vert,
} from "../assets/images/jumbo/";

import { motion } from "framer-motion";

import NameBanner from "./NameBanner";

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
        <picture id="throw-no-ball-transparent" className="drop-shadow">
          <source
            srcSet={throwball50Vert}
            media="only screen and (min-width: 679px)"
            type="image/png"
          />
          <source
            srcSet={throwball25Vert}
            media="only screen and (min-width: 272px)"
            type="image/png"
          />
          <img
            id="throw-no-ball-transparent"
            src={throwball10Vert}
            className="img-fluid"
            alt="madison-olguin"
          />
        </picture>
        {/* <Image
          id="throw-no-ball-transparent"
          src={throwballNoBall50Vert}
          alt="madison-olguin"
        /> */}

        <picture id="throw-no-ball" className="drop-shadow">
          <source
            srcSet={throwballNoBall50Vert}
            media="only screen and (min-width: 679px)"
            type="image/png"
            className="img-fluid"
            alt="madison-olguin"
          />
          <source
            srcSet={throwballNoBall25Vert}
            media="only screen and (min-width: 272px)"
            type="image/png"
            className="img-fluid"
            alt="madison-olguin"
          />
          <img
            src={throwballNoBall10Vert}
            className="img-fluid"
            alt="madison-olguin"
          />
        </picture>
        {/* <Image
          id="throw-no-ball"
          src={throwballNoBall50Vert}
          alt="madison-olguin"
          className="drop-shadow"
        /> */}

        <picture id="ball" className="drop-shadow">
          <source
            srcSet={throwballBall50Vert}
            media="only screen and (min-width: 679px)"
            type="image/png"
            className="img-fluid"
            alt="madison-olguin"
          />
          <source
            srcSet={throwballBall25Vert}
            media="only screen and (min-width: 272px)"
            type="image/png"
            className="img-fluid"
            alt="madison-olguin"
          />
          <img
            src={throwballBall10Vert}
            className="img-fluid"
            alt="madison-olguin"
          />
        </picture>
        {/* <Image
          id="ball"
          src={throwballBall50Vert}
          alt="madison-olguin"
          className="drop-shadow"
        /> */}
        <NameBanner />
      </div>
    </div>
  );
};

export default ThrowBall;
