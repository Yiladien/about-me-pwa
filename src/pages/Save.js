import React, { useEffect, useState } from "react";

//bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

//bootstrap-icons
import { Download } from "react-bootstrap-icons";

//to store the beoreinstallPrompt event
let promptEvent = null;

const Save = ({ safariiOSUser, promptEvent, pwaPrompt }) => {
  const handleInstallClick = async (e1) => {
    console.log("handleInstallClick");
    e1.preventDefault();
    promptEvent.prompt();

    const { outcome } = await promptEvent.userChoice;
    console.log(outcome);

    promptEvent = null;

    window.addEventListener("appinstalled", () => {
      console.log("appinstalled fired");

      promptEvent = null;

      setPwaPrompt({
        ...pwaPrompt,
        installed: true,
        showInstall: false,
      });
    });
  };
  console.log(pwaPrompt);

  return (
    <section className="scroll-container">
      {/* for testing */}
      <div className="position-absolute top-0 start-0 border">
        <ul>
          {Object.entries(pwaPrompt).map((entry) => (
            <li>
              {entry[0]}:{" "}
              {entry[1] === undefined
                ? "undefined"
                : entry[1] === null
                ? "null"
                : entry[1].toString()}
            </li>
          ))}
        </ul>
      </div>
      <div
        style={{
          position: `absolute`,
          top: `0px`,
          left: `0px`,
          border: `1px dashed green`,
          height: `100vh`,
          width: `15vw`,
          paddingTop: `60%`,
        }}
      >
        100vh
      </div>
      <div
        style={{
          position: `absolute`,
          top: `0px`,
          left: `16vw`,
          border: `1px dashed green`,
          height: `100dvh`,
          width: `15vw`,
          paddingTop: `60%`,
        }}
      >
        100dvh
      </div>
      <div
        style={{
          position: `absolute`,
          top: `0px`,
          left: `32vw`,
          border: `1px dashed green`,
          height: `100svh`,
          width: `15vw`,
          paddingTop: `60%`,
        }}
      >
        100svh
      </div>
      <div
        style={{
          position: `absolute`,
          top: `0px`,
          left: `48vw`,
          border: `1px dashed green`,
          height: `100lvh`,
          width: `15vw`,
          paddingTop: `60%`,
        }}
      >
        100lvh
      </div>
      <div
        style={{
          position: `absolute`,
          top: `0px`,
          right: `0px`,
          border: `1px dashed red`,
          height: `10%`,
          width: `10vw`,
          paddingTop: `10%`,
        }}
      >
        10%
      </div>
      <div
        style={{
          position: `absolute`,
          top: `0px`,
          right: `0px`,
          border: `1px dashed red`,
          height: `25%`,
          width: `14vw`,
          paddingTop: `25%`,
        }}
      >
        25%
      </div>
      <div
        style={{
          position: `absolute`,
          top: `0px`,
          right: `0px`,
          border: `1px dashed red`,
          height: `50%`,
          width: `18vw`,
          paddingTop: `50%`,
        }}
      >
        50%
      </div>
      <div
        style={{
          position: `absolute`,
          top: `0px`,
          right: `0px`,
          border: `1px dashed red`,
          height: `100%`,
          width: `22vw`,
          paddingTop: `100%`,
        }}
      >
        100%
      </div>
      <div
        className="height-test-env"
        style={{
          position: `absolute`,
          top: `0px`,
          left: `64vw`,
          border: `1px dashed blue`,
          width: `15vw`,
          paddingTop: `60%`,
        }}
      >
        env
      </div>
      {/* end testing */}
      <div className="page-container">
        <Row className="mb-5">
          <Col className="d-flex justify-content-center">
            <h1>Save</h1>
          </Col>
        </Row>
        <Row className="mb-1">
          <Col className="d-flex justify-content-center">
            <div>
              <p className="handwritten-text fs-2">
                Save my app to your device.
              </p>
            </div>
          </Col>
        </Row>
        {safariiOSUser ? (
          <Row className="mb-3">
            <Col className="d-flex justify-content-center">
              <Button
                id="installButton"
                name="installButton"
                variant="secondary"
                onClick={handleInstallClick}
              >
                Install {` `}
                <Download />
              </Button>
            </Col>
          </Row>
        ) : null}
        {!safariiOSUser ? (
          <Row className="mb-3 position-absolute bg-white bottom-0 start-50 translate-middle-x">
            <Col className="d-flex justify-content-center">
              <Button
                id="installButton"
                name="installButton"
                variant="secondary"
                onClick={handleInstallClick}
              >
                Install {` `}
                <Download />
              </Button>
            </Col>
          </Row>
        ) : null}
      </div>
    </section>
  );
};

export default Save;
