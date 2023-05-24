import React, { useState } from "react";
import { useRef } from "react";

//bootstrap
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";

// import image1 from "../assets/images/jumbo/olguin-1400x933.png";
import {
  throwball50,
  throwball25,
  throwball10,
  throwballNoBall50,
  throwballNoBall25,
  throwballNoBall10,
  throwballBall50,
  throwballBall25,
  throwballBall10,
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

// import { motion } from "framer-motion";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

// function useParallax(value, distance) {
//   return useTransform(value, [0, 1], [-distance, distance]);
// }

function PageContainer(props) {
  const ref = useRef(null);
  // const { scrollYProgress } = useScroll({ target: ref });
  //   const y = useParallax(scrollYProgress, 300);

  return (
    <div className="vh-100 w-100 border border-white snap-container">
      <div ref={ref}>Test Page</div>
      {/* <motion.h2 style={{ y }}>{`#003`}</motion.h2> */}
    </div>
  );
}

const Home = () => {
  const ballAnimationSettings = {
    duration: 100,
    vertical: {
      originX: 26.3,
      originY: 22.2,
    },
    horizontal: {
      originX: 32.1,
      originY: 22.2,
    },
  };

  //   const { scrollYProgress } = useScroll();
  //   const scaleX = useSpring(scrollYProgress, {
  //     stiffness: 100,
  //     damping: 30,
  //     restDelta: 0.001,
  //   });

  return (
    <>
      <div className="bg-dark bg-gradient text-white">
        <Container fluid className="vh-100">
          <div className="position-relative d-flex ">
            <motion.div
              className="position-relative m-auto"
              whileHover={{ scale: 1.1, opacity: 1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <motion.div
                className="position-absolute"
                initial={{ opacity: 0, scale: 0.25 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <Image
                  fluid
                  src={throwballNoBall50Vert}
                  alt="madison-olguin"
                  className="drop-shadow"
                />
              </motion.div>

              <motion.div
                className="position-absolute"
                style={{
                  transformOrigin: `${ballAnimationSettings.vertical.originX}% ${ballAnimationSettings.vertical.originY}%`,
                }}
                animate={{ rotate: -360 }}
                transition={{
                  duration: ballAnimationSettings.duration,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 1.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <Image
                    fluid
                    src={throwballBall10Vert}
                    alt="madison-olguin"
                    //   className=""
                  />
                </motion.div>
              </motion.div>

              <Image
                fluid
                src={throwballNoBall10Vert}
                alt="basketball"
                className="opacity-0"
              />
            </motion.div>
          </div>
        </Container>
        {[0, 1, 2, 3, 4].map((id, index) => (
          <PageContainer key={index} />
        ))}
        <Container fluid className="vh-100"></Container>
      </div>
    </>
  );
};

export default Home;
