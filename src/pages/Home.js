import React, { useState } from "react";

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

import { motion } from "framer-motion";

const Home = () => {
  const [bgDelay, setBgDelay] = useState(0);

  const animationSettings = {
    duration: 100,
    originX: 26.3,
    originY: 22.3,
  };

  return (
    <>
      <Container
        fluid
        className="bg-dark bg-gradient overflow-hidden position-relative"
      >
        <motion.div
          className="position-relative m-auto"
          whileHover={{ scale: 1.1 }}
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
              src={throwballNoBall10Vert}
              alt="madison-olguin"
              className="opacity-100"
            />
          </motion.div>

          <motion.div
            className="position-absolute"
            style={{
              transformOrigin: `${animationSettings.originX}% ${animationSettings.originY}%`,
            }}
            animate={{ rotate: -360 }}
            transition={{
              duration: animationSettings.duration,
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
                className="opacity-100"
              />
            </motion.div>
          </motion.div>

          <Image
            fluid
            src={throwballNoBall10Vert}
            alt="madison-olguin"
            className="opacity-0"
          />
        </motion.div>

        {/* <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 36,
              repeat: Infinity,
            }}
          >
            <Image
              fluid
              hidden
              src={throwballBall10Vert}
              alt="madison-olguin"
              className="opacity-100"
            />
          </motion.div>
        </motion.div> */}
      </Container>
      <Row>
        <Col>
          <div></div>
        </Col>
        <Col></Col>
      </Row>
    </>
  );
};

export default Home;
