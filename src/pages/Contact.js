import React, { useState } from "react";

//bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";

import {
  Envelope,
  EnvelopeOpen,
  Phone,
  PhoneLandscape,
  PhoneVibrate,
  PhoneFlip,
  Telephone,
  TelephoneOutbound,
  Messenger,
} from "react-bootstrap-icons";

import { motion } from "framer-motion";

const Contact = () => {
  const [hovered, setHovered] = useState({});

  const toggleHovered = (event) => {
    const name = event.target.attributes.name.value;
    setHovered({ [name]: !hovered[name] });
  };

  return (
    <section className="scroll-container">
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
              >
                {hovered.telephone ? <TelephoneOutbound /> : <Telephone />}
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
                name="messenger"
              >
                {hovered.messenger ? (
                  <Messenger style={{ transform: "rotate(10deg)" }} />
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
