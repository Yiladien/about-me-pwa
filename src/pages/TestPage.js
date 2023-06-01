import React, { useState } from "react";

//bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

//bootstrap-icons
import { Download } from "react-bootstrap-icons";

const TestPage = ({ safariiOSUser, pwaPrompt, page }) => {
  const [toggleStyle, setToggleStyle] = useState({
    // backgroundColor: false,
  });

  const [formStyle, setFormStyle] = useState({
    heightNum: 100,
    sectionHeightUnit: "vh",
    boxShadow: true,
  });

  const handleStyleChange = (event) => {
    event.preventDefault();

    let vhType;
    let heightNumber;
    let boxOutline;

    if (event.target.name === "heightNum") {
      heightNumber = event.target.heightNum.value;
      vhType = formStyle.sectionHeightUnit;
      boxOutline = formStyle.boxShadow;
    } else if (event.target.dataset.type === "sectionHeightUnit") {
      heightNumber = formStyle.heightNum;
      vhType = event.target.innerText;
      boxOutline = formStyle.boxShadow;
    } else if (event.target.dataset.type === "boxShadow") {
      heightNumber = formStyle.heightNum;
      vhType = formStyle.sectionHeightUnit;
      boxOutline = !formStyle.boxShadow;
    }

    // heightNum form
    // console.log(event.target.name);
    // console.log(event.target.heightNum.value);

    // vh buttons
    // console.dir(event.target.innerText);
    // console.log(event.target.dataset.type);

    const scrollContainers = document.querySelectorAll(".scroll-container");

    scrollContainers.forEach((sc) => {
      sc.style.height = `${heightNumber}${vhType}`;
      sc.style.boxShadow = `${
        boxOutline ? "inset 0px 0px 2px 2px white" : "none"
      }`;
    });

    setFormStyle({
      ...formStyle,
      sectionHeightUnit: vhType,
      heightNum: heightNumber,
      boxShadow: boxOutline,
    });
  };

  return (
    <section className="scroll-container">
      {/* for testing */}
      <div
        className={`position-absolute top-0 start-0`}
        style={{
          zIndex: "2000",
          width: "100%",
        }}
      >
        <div>
          <Button
            name="showPWAData"
            size="sm"
            variant="secondary m-2"
            onClick={(event) => {
              return setToggleStyle({
                ...toggleStyle,
                [event.target.name]: !toggleStyle[event.target.name],
              });
            }}
          >
            Show PWA Data
          </Button>
          <Button
            name="showHeights"
            size="sm"
            variant="secondary m-2"
            onClick={(event) => {
              return setToggleStyle({
                ...toggleStyle,
                [event.target.name]: !toggleStyle[event.target.name],
              });
            }}
          >
            Show Heights
          </Button>
          <Button
            name="changeStyle"
            size="sm"
            variant="secondary m-2"
            onClick={(event) => {
              return setToggleStyle({
                ...toggleStyle,
                [event.target.name]: !toggleStyle[event.target.name],
              });
            }}
          >
            Change Heights
          </Button>
        </div>
        <div className="position-relative">
          {/* showPDAData */}
          <div
            className={`position-absolute border ${
              toggleStyle.backgroundColor && " bg-dark"
            }`}
            style={{
              top: "0px",
              left: "0px",
              marginLeft: "2%",
              width: "96%",
            }}
            hidden={!toggleStyle.showPWAData ? "hidden" : null}
          >
            <div>
              <Button
                name="backgroundColor"
                size="sm"
                variant="secondary m-2"
                onClick={(event) => {
                  return setToggleStyle({
                    ...toggleStyle,
                    [event.target.name]: !toggleStyle[event.target.name],
                  });
                }}
              >
                BG
              </Button>
            </div>
            <div>
              <ul>
                {Object.entries(pwaPrompt).map((entry) => (
                  <li key={entry}>
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
          </div>

          {/* changeStyle */}
          <div
            className={`position-absolute border-top`}
            style={{
              top: "0px",
              left: "0px",
              marginLeft: "2%",
              width: "96%",
            }}
            hidden={!toggleStyle.changeStyle ? "hidden" : null}
          >
            <div>
              <span>Height Unit: </span>
              <Button
                name="vh"
                data-type="sectionHeightUnit"
                size="sm"
                variant="secondary m-2"
                style={{
                  width: "3rem",
                }}
                onClick={handleStyleChange}
              >
                vh
              </Button>
              <Button
                name="svh"
                data-type="sectionHeightUnit"
                size="sm"
                variant="secondary m-2"
                style={{
                  width: "3rem",
                }}
                onClick={handleStyleChange}
              >
                svh
              </Button>
              <Button
                name="dvh"
                data-type="sectionHeightUnit"
                size="sm"
                variant="secondary m-2"
                style={{
                  width: "3rem",
                }}
                onClick={handleStyleChange}
              >
                dvh
              </Button>
              <Button
                name="lvh"
                data-type="sectionHeightUnit"
                size="sm"
                variant="secondary m-2"
                style={{
                  width: "3rem",
                }}
                onClick={handleStyleChange}
              >
                lvh
              </Button>
            </div>
            <div>
              <Form
                className="m-2"
                onSubmit={handleStyleChange}
                name="heightNum"
              >
                <Form.Group as={Row} className="mb-2">
                  <Col xs={"auto"} className="pe-0">
                    <Form.Label>Height Value:</Form.Label>
                  </Col>
                  <Col xs={3} className="pe-0">
                    <Form.Control
                      size="sm"
                      type="text"
                      name="heightNum"
                      defaultValue={"100"}
                    />
                  </Col>
                  <Col xs={"auto"}>
                    <Button size="sm" type="submit" variant="secondary">
                      Update
                    </Button>
                  </Col>
                </Form.Group>
              </Form>
            </div>
            <div>
              <span>Section Outline: </span>
              <Button
                name="boxShadow"
                data-type="boxShadow"
                size="sm"
                variant="secondary m-2"
                onClick={handleStyleChange}
              >
                Add Outline
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          position: `absolute`,
          top: `0px`,
          left: `0px`,
          border: `1px dashed green`,
          height: `100vh`,
          width: `15vw`,
          paddingTop: `130%`,
        }}
        hidden={!toggleStyle.showHeights ? "hidden" : null}
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
          paddingTop: `130%`,
        }}
        hidden={!toggleStyle.showHeights ? "hidden" : null}
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
          paddingTop: `130%`,
        }}
        hidden={!toggleStyle.showHeights ? "hidden" : null}
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
          paddingTop: `130%`,
        }}
        hidden={!toggleStyle.showHeights ? "hidden" : null}
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
        hidden={!toggleStyle.showHeights ? "hidden" : null}
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
        hidden={!toggleStyle.showHeights ? "hidden" : null}
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
        hidden={!toggleStyle.showHeights ? "hidden" : null}
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
        hidden={!toggleStyle.showHeights ? "hidden" : null}
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
        hidden={!toggleStyle.showHeights ? "hidden" : null}
      >
        env
      </div>
      {/* end testing */}
      <div className="page-container">
        <Row className="mb-5">
          <Col className="d-flex justify-content-center">
            <h1>Test Page{` ${page}`}</h1>
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
          <Row className="mb-3 position-absolute bg-white bottom-0 start-50 translate-middle-x">
            <Col className="d-flex justify-content-center">
              <Button
                id="installButton"
                name="installButton"
                variant="secondary"
                onClick={() => console.log("click")}
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
                onClick={() => console.log("click")}
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

export default TestPage;
