import React from "react";

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
  return (
    <div
      id="full-container"
      className="d-flex align-items-center justify-content-center w-100 h-100 flex-column position-relative"
    >
      <div
        id="image-container"
        className="d-flex-inline mw-100 mh-100 position-relative overflow-hidden pb-5"
      >
        <picture>
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
          <motion.img
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 0,
              scale: 1,
            }}
            transition={{
              opacity: {
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              },
              scale: {
                duration: 1.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              },
            }}
            id="throw-no-ball-transparent"
            className="img-fluid opacity-0 mw-100 mh-100"
            src={throwball10Vert}
            alt="madison-olguin"
          />
        </picture>
        {/* <Image
          id="throw-no-ball-transparent"
          src={throwballNoBall50Vert}
          alt="madison-olguin"
        /> */}

        <picture>
          <source
            srcSet={throwballNoBall50Vert}
            media="only screen and (min-width: 679px)"
            type="image/png"
            alt="madison-olguin"
          />
          <source
            srcSet={throwballNoBall25Vert}
            media="only screen and (min-width: 272px)"
            type="image/png"
            alt="madison-olguin"
          />
          <motion.img
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              opacity: {
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              },
              scale: {
                duration: 1.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              },
            }}
            id="throw-no-ball"
            className="img-fluid drop-shadow mw-100 mh-100 position-absolute top-0 start-0"
            src={throwballNoBall10Vert}
            alt="madison-olguin"
          />
        </picture>
        {/* <Image
          id="throw-no-ball"
          src={throwballNoBall50Vert}
          alt="madison-olguin"
          className="drop-shadow"
        /> */}

        <picture>
          <source
            srcSet={throwballBall50Vert}
            media="only screen and (min-width: 679px)"
            type="image/png"
            alt="madison-olguin"
          />
          <source
            srcSet={throwballBall25Vert}
            media="only screen and (min-width: 272px)"
            type="image/png"
            alt="madison-olguin"
          />

          <motion.img
            initial={{
              opacity: 0,
              scale: 0,
              rotate: 0,
              originX: "70.3%",
              originY: "70.2%",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 360,
              originX: "26.3%",
              originY: "22.2%",
            }}
            transition={{
              originX: {
                duration: 1.2,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              },
              originY: {
                duration: 1.2,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              },
              opacity: {
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              },
              scale: {
                duration: 1.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              },
              rotate: {
                repeat: Infinity,
                duration: 20,
              },
            }}
            id="ball"
            className="img-fluid drop-shadow mw-100 mh-100 position-absolute top-0 start-0"
            src={throwballBall10Vert}
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
