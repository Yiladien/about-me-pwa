import React, { useState, useEffect } from "react";

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

import { motion, useAnimate, useInView, stagger } from "framer-motion";

const Contact = ({ paddingTop, paddingBottom }) => {
  const [hovered, setHovered] = useState({});

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  const staggerIcons = stagger(0.3, { startDelay: 0.5 });

  useEffect(() => {
    animate(
      ".icon-div",
      isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 },
      {
        type: "spring",
        stiffness: 400,
        damping: 17,
        duration: 0.2,
        delay: isInView ? staggerIcons : 0,
      }
    );
  }, [isInView, animate, staggerIcons]);

  const toggleHovered = (event, value) => {
    console.log(value);
    const name = event.target.attributes.name.value;
    setHovered({ [name]: value });
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
        <Row className="mb-3" ref={scope}>
          <Col className="d-flex justify-content-center">
            <motion.div
              className="icon-div"
              initial={{ rotate: 0 }}
              whileHover={{ rotate: [15, -15, 0] }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <a
                className="link-light"
                href="mailto:"
                target="_blank"
                rel="noopener noreferrer"
                // onClick={() =>
                //   setTimeout(() => {
                //     window.location = "mailto:";
                //   }, 1500)
                // }
              >
                <span
                  className="icon-button click-pointer"
                  onMouseEnter={(e) => toggleHovered(e, true)}
                  onMouseLeave={(e) => toggleHovered(e, false)}
                  name="email"
                  title="Email me!"
                >
                  {hovered.email ? (
                    <EnvelopeOpen style={{ transform: "translateY(-12.5%)" }} />
                  ) : (
                    <Envelope />
                  )}
                </span>
              </a>
            </motion.div>
          </Col>
          <Col className="d-flex justify-content-center">
            <motion.div
              className="icon-div"
              initial={{ rotate: 0 }}
              whileHover={{ rotate: [15, -15, 0] }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <a
                className="link-light"
                href="tel:5555555555"
                target="_blank"
                rel="noopener noreferrer"
                // onClick={() =>
                //   setTimeout(() => {
                //     window.location = "tel:5555555555";
                //   }, 1500)
                // }
              >
                <span
                  className="icon-button click-pointer"
                  onMouseEnter={(e) => toggleHovered(e, true)}
                  onMouseLeave={(e) => toggleHovered(e, false)}
                  name="telephone"
                  title="Call me!"
                >
                  {hovered.telephone ? <TelephoneOutbound /> : <Telephone />}
                </span>
              </a>
            </motion.div>
          </Col>
          <Col className="d-flex justify-content-center">
            <motion.div
              className="icon-div"
              initial={{ rotate: 0 }}
              whileHover={{ rotate: [15, -15, 0] }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <a
                className="link-light"
                href="https://m.me/lolaolguin"
                target="_blank"
                rel="noopener noreferrer"
                // onClick={() =>
                //   setTimeout(() => {
                //     window.location = "https://m.me/lolaolguin";
                //   }, 1500)
                // }
              >
                <span
                  className="icon-button click-pointer"
                  onMouseEnter={(e) => toggleHovered(e, true)}
                  onMouseLeave={(e) => toggleHovered(e, false)}
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
              </a>
            </motion.div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Contact;
