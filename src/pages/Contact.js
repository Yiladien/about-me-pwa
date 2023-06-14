import React, { useState } from "react";

//bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";

import {
  Envelope,
  EnvelopeOpen,
  Telephone,
  TelephoneOutbound,
  Messenger,
} from "react-bootstrap-icons";

import { motion } from "framer-motion";

const Contact = ({ paddingTop, paddingBottom }) => {
  const [hovered, setHovered] = useState({});

  const toggleHovered = (event) => {
    const name = event.target.attributes.name.value;
    setHovered({ [name]: !hovered[name] });
  };

  return (
    <section
      className="scroll-container"
      style={{
        paddingTop: paddingTop,
        paddingBottom: paddingBottom,
      }}
    >
      <div className="page-container">
        <Row className="mb-5">
          <Col className="d-flex justify-content-center">
            <h1>Contact Me</h1>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col className="d-flex justify-content-center">
            <motion.div
              whileHover={{ scale: 2 }}
              whileTap={{ scale: 2 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span
                className="icon-button click-pointer"
                onMouseEnter={toggleHovered}
                onMouseLeave={toggleHovered}
                name="email"
                title="Email me!"
              >
                {hovered.email ? (
                  <EnvelopeOpen style={{ transform: "translateY(-12.5%)" }} />
                ) : (
                  <Envelope />
                )}
              </span>
            </motion.div>
          </Col>
          <Col className="d-flex justify-content-center">
            <motion.div
              whileHover={{ scale: 2 }}
              whileTap={{ scale: 2 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span
                className="icon-button"
                onMouseEnter={toggleHovered}
                onMouseLeave={toggleHovered}
                name="telephone"
                title="Call me!"
              >
                {hovered.telephone ? <TelephoneOutbound /> : <Telephone />}
              </span>
            </motion.div>
          </Col>
          <Col className="d-flex justify-content-center">
            <motion.div
              initial={{ scale: 1, rotate: 0 }}
              whileHover={{ scale: 2, rotate: [15, -15, 0] }}
              whileTap={{ scale: 2 }}
              transition={{
                scale: { type: "spring", stiffness: 400, damping: 17 },
                rotate: { duration: 0.5, ease: "easeInOut" },
              }}
            >
              <span
                className="icon-button"
                onMouseEnter={toggleHovered}
                onMouseLeave={toggleHovered}
                name="messenger"
                title="Message me!"
              >
                {hovered.messenger ? (
                  <Messenger
                  // style={{ transform: "rotate(10deg) rotate(-10deg)" }}
                  />
                ) : (
                  <Messenger />
                )}
              </span>
            </motion.div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Contact;
