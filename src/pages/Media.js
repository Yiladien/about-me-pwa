import React, { useState, useEffect } from "react";

//bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Twitter, Instagram, Facebook } from "react-bootstrap-icons";

import { motion, useAnimate, useInView, stagger } from "framer-motion";

const Media = ({ paddingTop, paddingBottom }) => {
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
            <h1>Media</h1>
          </Col>
        </Row>
        <Row className="mb-3 fs-1 pb-5" ref={scope}>
          <Col className="d-flex justify-content-center">
            <motion.div
              className="icon-div"
              initial={{ rotate: 0 }}
              whileHover={{ rotate: [15, -15, 0] }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <a
                className="text-reset"
                href="https://twitter.com/MadisonOlguin21"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span
                  className="icon-button click-pointer"
                  onMouseEnter={(e) => toggleHovered(e, true)}
                  onMouseLeave={(e) => toggleHovered(e, false)}
                  name="twitter"
                  title="My Tweets"
                >
                  {hovered.twitter ? (
                    <Twitter
                    // style={{ transform: "rotate(10deg) rotate(-10deg)" }}
                    />
                  ) : (
                    <Twitter />
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
                className="text-reset"
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span
                  className="icon-button click-pointer"
                  onMouseEnter={(e) => toggleHovered(e, true)}
                  onMouseLeave={(e) => toggleHovered(e, false)}
                  name="instagram"
                  title="My Instagram"
                >
                  {hovered.instagram ? (
                    <Instagram
                    // style={{ transform: "rotate(10deg) rotate(-10deg)" }}
                    />
                  ) : (
                    <Instagram />
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
                className="text-reset"
                href="https://www.facebook.com/lolaolguin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span
                  className="icon-button click-pointer"
                  onMouseEnter={(e) => toggleHovered(e, true)}
                  onMouseLeave={(e) => toggleHovered(e, false)}
                  name="facebook"
                  title="My Facebook"
                >
                  {hovered.facebook ? (
                    <Facebook
                    // style={{ transform: "rotate(10deg) rotate(-10deg)" }}
                    />
                  ) : (
                    <Facebook />
                  )}
                </span>
              </a>
            </motion.div>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col></Col>
        </Row>
      </div>
    </section>
  );
};

export default Media;
