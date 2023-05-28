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
  throwballNoBall10,
  throwballBall10,
  throwballNoBall10Vert,
} from "../assets/images/jumbo/";

import { motion } from "framer-motion";

const GridOverlay = ({
  dimensions,
  bcolor = "border-white",
  strokeSize = "border-1",
}) => {
  const rowCount = Array.isArray(dimensions) ? dimensions[0] : dimensions;
  const colCount = Array.isArray(dimensions) ? dimensions[1] : dimensions;

  return (
    <div className="position-absolute w-100">
      {Array.from({ length: rowCount }, (_, indexRow) => (
        <Row className="" key={indexRow}>
          {Array.from({ length: colCount }, (_, indexCol) => (
            <Col
              key={`${indexRow}-${indexCol}`}
              className={`p-1 border ratio ratio-1x1 ${bcolor} ${strokeSize}`}
            ></Col>
          ))}
        </Row>
      ))}
    </div>
  );
};

const Example = () => {
  const [bgDelay, setBgDelay] = useState(0);
  const [gridSlider, setGridSlider] = useState(10);

  const [animationSettings, setAnimationSettings] = useState({
    duration: 100,
    transformX: 32.1,
    transformY: 22.2,
  });

  console.log(throwball50);

  return (
    <>
      <Container>
        <h3 className="text-light">Your Favorite Tools</h3>
      </Container>
      <Container className="text-white">
        <Form.Group>
          <Form.Label>Grid Size: {gridSlider}</Form.Label>
          <Form.Range
            value={gridSlider}
            max="25"
            onChange={(event) => {
              return setGridSlider(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>OriginX: {animationSettings.transformX}</Form.Label>
          <Form.Control
            type="text"
            name="transformX"
            value={animationSettings.transformX}
            onChange={(event) => {
              return setAnimationSettings({
                ...animationSettings,
                transformX: event.target.value,
              });
            }}
          />
          <Form.Range
            value={animationSettings.transformX}
            max="100"
            step=".1"
            onChange={(event) => {
              return setAnimationSettings({
                ...animationSettings,
                transformX: event.target.value,
              });
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>OriginY: {animationSettings.transformY}</Form.Label>
          <Form.Control
            type="text"
            name="transformY"
            value={animationSettings.transformY}
            onChange={(event) => {
              return setAnimationSettings({
                ...animationSettings,
                transformY: event.target.value,
              });
            }}
          />
          <Form.Range
            value={animationSettings.transformY}
            max="100"
            step=".1"
            onChange={(event) => {
              return setAnimationSettings({
                ...animationSettings,
                transformY: event.target.value,
              });
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Duration: {animationSettings.duration}</Form.Label>
          <Form.Range
            value={animationSettings.duration}
            max="50"
            step=".1"
            onChange={(event) => {
              return setAnimationSettings({
                ...animationSettings,
                duration: event.target.value,
              });
            }}
          />
        </Form.Group>
      </Container>
      <Container
        fluid
        className="bg-dark bg-gradient overflow-hidden position-relative"
      >
        <motion.div
          className="position-relative m-auto"
          //   whileHover={{ scale: 1.1 }}
          //   whileTap={{ scale: 0.9 }}
          //   transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <motion.div
            className="position-absolute"
            initial={{ opacity: 0, scale: 0.25 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <Image
              fluid
              src={throwballNoBall10}
              alt="madison-olguin"
              className="opacity-100"
            />
          </motion.div>
          <motion.div
            className="position-absolute"
            style={{
              transformOrigin: `${animationSettings.transformX}% ${animationSettings.transformY}%`,
            }}
            animate={{ rotate: -360 }}
            transition={{
              duration: animationSettings.duration,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            <Image
              fluid
              src={throwballBall10}
              alt="madison-olguin"
              className="opacity-100"
            />
          </motion.div>

          <GridOverlay
            dimensions={gridSlider}
            bcolor="border-white"
            strokeSize="border-1"
          />
          <div
            className="position-absolute"
            style={{
              left: `${animationSettings.transformX}%`,
              top: `${animationSettings.transformY}%`,
              border: "5px solid red",
              borderRadius: "50%",
            }}
          ></div>
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

export default Example;
