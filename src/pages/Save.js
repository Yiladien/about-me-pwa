import React from "react";

//bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

//bootstrap-icons
import { Download, BoxArrowUp, PlusSquare } from "react-bootstrap-icons";

import appLogo from "../assets/images/logo/logo-128x128.png";

const Save = ({ safariiOSUser, promptEvent, paddingTop, paddingBottom }) => {
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
    <section
      className="scroll-container"
      style={{
        paddingTop: paddingTop,
        paddingBottom: paddingBottom,
      }}
    >
      <div className="page-container">
        <Row>
          <Col className="d-flex justify-content-center">
            <div>
              <h1>Save</h1>
            </div>
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
          <div className="d-flex justify-content-center position-absolute bottom-0 start-50 translate-middle-x">
            <div className="install-popover add-bottom-arrow bg-light text-dark rounded-2 ps-2 pe-2">
              <div
                className="install-logo"
                style={{
                  backgroundImage: `url(${appLogo})`,
                }}
              ></div>
              <div className="install-header mb-2">
                <h5 className="text-center fw-bold">Apple Mobile Users</h5>
              </div>
              <div className="install-body fs-6">
                <div className="text-center fw-semibold">{`Save to your Home Screen`}</div>
                <ol className="pt-1 ps-4">
                  <li className="pb-2 ">
                    {`Tap the `}
                    <BoxArrowUp className="mb-1" />
                    {` button.`}
                    <br />
                    <span className="fst-italic">{`(If your toolbar is hidden, tap the web address or scroll up to unhide.)`}</span>
                  </li>
                  <li className="pb-2">
                    Select 'Add to Home Screen{" "}
                    <PlusSquare className="mb-1 ms-2" /> '
                  </li>
                  <li className="pb-1">
                    Select 'Add'
                    <br />
                    <div className="add-home-box border d-flex flex-nowrap">
                      <div className="add-home-icon">
                        <Image src={appLogo} fluid />
                      </div>
                      <div className="add-home-text flex-grow-1 d-flex flex-column">
                        <div className="flex-grow-1 d-flex align-items-center pe-3">
                          Madison Olguin
                        </div>
                        <div className="flex-grow-1 d-flex align-items-center border-top pe-3">
                          https://www.madisonolguin.com
                        </div>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        ) : null}
        {!safariiOSUser ? (
          <Row className="mb-3 position-absolute bottom-0 start-50 translate-middle-x">
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
