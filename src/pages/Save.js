import React from "react";

//bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

//bootstrap-icons
import { Download } from "react-bootstrap-icons";

const Save = ({ safariiOSUser, promptEvent }) => {
  const handleInstallClick = async (e1) => {
    console.log("handleInstallClick");
    e1.preventDefault();
    if (safariiOSUser) {
      return console.log("safari user install click");
    }

    promptEvent.prompt();

    const { outcome } = await promptEvent.userChoice;
    console.log(outcome);

    promptEvent = null;
  };

  return (
    <section className="scroll-container">
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
