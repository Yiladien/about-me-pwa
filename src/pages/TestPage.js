import React, { useState } from "react";

//bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

//bootstrap-icons
import { Download } from "react-bootstrap-icons";

const TestPage = ({ safariiOSUser, pwaPrompt, page }) => {
  const [toggleStyle, setToggleStyle] = useState({
    // backgroundColor: false,
  });

  //   const [formStyle, setFormStyle] = useState({
  //     heightNum: 100,
  //     heightUnitType: "vh",
  //     boxShadow: true,
  //     padding: 0,
  //     showEnvBox: true,
  //   });

  const handleStyleChange = (event) => {
    event.preventDefault();
    // console.log(event);
    console.log(event.target.idClassRadio.value);
    console.log(event.target.idClassName.value);
    // console.log(event.target.name);
    // console.log(event.target.paddingTop.value);
    // console.log(event.target.paddingBottom.value);

    if (event.target?.dataset?.type === "heightUnitType") {
      const scrollContainers = document.querySelectorAll(".scroll-container");

      scrollContainers.forEach((sc) => {
        sc.style.height = `100${event.target.innerText}`;
      });

      return;
    }

    if (!event.target.idClassRadio.value || !event.target.idClassName.value) {
      return;
    }

    let containerEl = [];
    if (event.target.idClassRadio.value === "idRadio") {
      containerEl = [document.getElementById(event.target.idClassName.value)];
    } else {
      containerEl = document.querySelectorAll(
        `.${event.target.idClassName.value}`
      );
    }

    if (!containerEl) {
      console.log("containerEl is false");
      return;
    } else {
      console.log(containerEl);
      containerEl.forEach((el) => {
        console.log(el);
        [
          "height",
          "paddingTop",
          "paddingBottom",
          "paddingRight",
          "paddingLeft",
          "boxShadow",
        ].forEach((style) => {
          console.log(style);
          console.log(event.target[style].value);

          if (!event.target[style] === "") {
            return;
          }

          if (style === "boxShadow") {
            console.log(
              `inset 0px 0px 0px ${event.target.boxShadow.value}px ${event.target.boxShadowColor.value}`
            );
            el.style.boxShadow = `inset 0px 0px 0px ${event.target.boxShadow.value}px ${event.target.boxShadowColor.value}`;
          } else {
            el.style[style] = event.target[style].value;
          }
        });

        // }
      });
    }
  };

  const PwaComponent = () => {
    return (
      <div
        className={`position-absolute border ${
          toggleStyle.showPdaBg && " bg-dark"
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
            name="showPdaBg"
            className="m-2"
            size="sm"
            variant="secondary"
            onClick={(event) => {
              return setToggleStyle({
                ...toggleStyle,
                [event.target.name]: !toggleStyle[event.target.name],
              });
            }}
          >
            {toggleStyle.showPdaBg ? "hide" : "show"}
            {` `}bg
          </Button>
        </div>
        <div>
          <code>
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
          </code>
        </div>
      </div>
    );
  };

  const StyleFormComponent = () => {
    return (
      <div
        className={`position-absolute border-top pt-2`}
        style={{
          top: "0px",
          left: "0px",
          marginLeft: "2%",
          width: "96%",
        }}
        hidden={!toggleStyle.changeStyle ? "hidden" : null}
      >
        {/* view height row */}
        <Row className="mb-2">
          <Col className="pe-2" xs="auto">
            Height Unit Toggle:{" "}
          </Col>
          <Col className="ps-0 pe-2" xs="auto">
            <Button
              name="vh"
              data-type="heightUnitType"
              size="sm"
              variant="secondary"
              style={{
                width: "3rem",
              }}
              onClick={handleStyleChange}
            >
              vh
            </Button>
          </Col>
          <Col className="ps-0 pe-2" xs="auto">
            <Button
              name="svh"
              data-type="heightUnitType"
              size="sm"
              variant="secondary"
              style={{
                width: "3rem",
              }}
              onClick={handleStyleChange}
            >
              svh
            </Button>
          </Col>
          <Col className="ps-0 pe-2" xs="auto">
            <Button
              name="dvh"
              data-type="heightUnitType"
              size="sm"
              variant="secondary"
              style={{
                width: "3rem",
              }}
              onClick={handleStyleChange}
            >
              dvh
            </Button>
          </Col>
          <Col className="ps-0 pe-2" xs="auto">
            <Button
              name="lvh"
              data-type="heightUnitType"
              size="sm"
              variant="secondary"
              style={{
                width: "3rem",
              }}
              onClick={handleStyleChange}
            >
              lvh
            </Button>
          </Col>
        </Row>
        {/* heightNum row */}
        <div className="border-top pt-2">
          <Form className="" onSubmit={handleStyleChange} name="styleForm">
            <Row>
              <Col xs={{ span: 8, offset: 4 }} className="pe-0">
                <h6>Update id or class styles</h6>
              </Col>
            </Row>
            {/* id or class row */}
            <Form.Group as={Row} className="mb-2">
              <Col xs={{ span: 8, offset: 4 }} className="pe-0">
                <Form.Check
                  inline
                  label="id"
                  name="idClassRadio"
                  type="radio"
                  id={`idRadio`}
                  value="idRadio"
                />
                <Form.Check
                  inline
                  label="class"
                  name="idClassRadio"
                  type="radio"
                  id={`classRadio`}
                  value="classRadio"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
              <Col xs={4} className="pe-0 ps-1 text-end">
                <Form.Label>css id or class:</Form.Label>
              </Col>
              <Col xs={7}>
                <Form.Control
                  size="sm"
                  type="text"
                  name="idClassName"
                  placeholder="scroll-container"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
              <Col xs={4} className="pe-0 ps-1 text-end">
                <Form.Label>height:</Form.Label>
              </Col>
              <Col xs="auto">
                <Form.Control
                  size="sm"
                  type="text"
                  name="height"
                  placeholder={"100vh"}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
              <Col xs={4} className="pe-0 ps-1 text-end">
                <Form.Label>padding-top:</Form.Label>
              </Col>
              <Col xs="auto">
                <Form.Control
                  size="sm"
                  type="text"
                  name="paddingTop"
                  placeholder={"0%"}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
              <Col xs={4} className="pe-0 ps-1 text-end">
                <Form.Label>padding-bottom:</Form.Label>
              </Col>
              <Col xs="auto">
                <Form.Control
                  size="sm"
                  type="text"
                  name="paddingBottom"
                  placeholder={"0%"}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
              <Col xs={4} className="pe-0 ps-1 text-end">
                <Form.Label>padding-right:</Form.Label>
              </Col>
              <Col xs="auto">
                <Form.Control
                  size="sm"
                  type="text"
                  name="paddingRight"
                  placeholder={"0%"}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
              <Col xs={4} className="pe-0 ps-1 text-end">
                <Form.Label>padding-left:</Form.Label>
              </Col>
              <Col xs="auto">
                <Form.Control
                  size="sm"
                  type="text"
                  name="paddingLeft"
                  placeholder={"0%"}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
              <Col xs={4} className="pe-0 ps-1 text-end">
                <Form.Label>inset border:</Form.Label>
              </Col>
              <Col xs={5}>
                <InputGroup size="sm">
                  <Form.Control
                    size="sm"
                    type="text"
                    name="boxShadow"
                    placeholder={"1"}
                  />
                  <InputGroup.Text>px</InputGroup.Text>
                  <Form.Control
                    size="sm"
                    type="color"
                    name="boxShadowColor"
                    defaultValue={"#AF3AFD"}
                  />
                </InputGroup>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
              <Col xs={{ span: 8, offset: 4 }} className="pe-0">
                <Button size="sm" type="submit" variant="secondary">
                  Submit Updates
                </Button>
              </Col>
            </Form.Group>
            <div className="border-top mt-4 mb-4"></div>
            <Form.Group as={Row} className="mb-2">
              <Col xs={4} className="pe-0 ps-1 text-end">
                <Form.Label>show border:</Form.Label>
              </Col>
              <Col xs="auto">
                <Form.Check size="sm" type="switch" name="padding-left" />
              </Col>
            </Form.Group>
          </Form>
        </div>
        {/* element outline row */}
        {/* <div className="mb-2">
          <span>Section Outline: </span>
          <Button
            name="boxShadow"
            data-type="boxShadow"
            size="sm"
            variant="secondary"
            onClick={handleStyleChange}
          >
            Add Outline
          </Button>
        </div> */}
      </div>
    );
  };

  const HeightGridsComponent = () => {
    return (
      <div
        className={`height-test-env ${toggleStyle.showHeightBg && " bg-dark"}`}
        style={{
          position: `absolute`,
          height: `100%`,
          width: `100%`,
          color: `white`,
        }}
        hidden={!toggleStyle.showHeights ? "hidden" : null}
      >
        {["vh", "lvh", "svh", "dvh", "%"].map((unit, index, unitArr) => (
          <div
            key={unit}
            className={`${
              toggleStyle.showHeightBg && " bg-secondary bg-opacity-25"
            }`}
            style={{
              position: `absolute`,
              top: `0px`,
              left: `${(100 / unitArr.length) * index}vw`,
              border: `1px dashed green`,
              height: `100vh`,
              width: `${100 / unitArr.length}vw`,
              paddingTop: `130%`,
              pointerEvents: `none`,
              fontSize: `.75rem`,
              textAlign: `center`,
              boxShadow: `inset 0px 0px 0px 2px #${Math.floor(
                Math.random() * 16777215
              ).toString(16)}`,
            }}
          >
            100{unit}
          </div>
        ))}

        <Button
          name="showHeightBg"
          className="m-2"
          style={{
            fontSize: `.75rem`,
            position: `absolute`,
            top: `4.5rem`,
            left: `2%`,
          }}
          size="sm"
          variant={toggleStyle.showHeightBg ? "dark" : "secondary"}
          onClick={(event) => {
            return setToggleStyle({
              ...toggleStyle,
              [event.target.name]: !toggleStyle[event.target.name],
            });
          }}
        >
          {toggleStyle.showHeightBg ? "hide" : "show"}
          {` `}bg
        </Button>
      </div>
    );
  };

  const EnvHeightComponent = () => {
    return (
      <div
        className={`height-test-env ${
          toggleStyle.showEnvBg && " bg-dark bg-opacity-25"
        }`}
        style={{
          position: `absolute`,
          top: `0px`,
          left: `0px`,
          border: `1px dashed orange`,
          height: `100vh`,
          width: `100vw`,
          boxShadow: `inset 0px 0px 2px 2px orange`,
        }}
        hidden={!toggleStyle.showEnvBox ? "hidden" : null}
      >
        <div
          className={`height-test-env ${
            toggleStyle.showEnvBg && " bg-secondary bg-opacity-50"
          }`}
          style={{
            height: `100%`,
            width: `100%`,
            boxShadow: `inset 0px 0px 2px 2px yellow`,
            textAlign: `center`,
            color: `white`,
            paddingTop: `50%`,
          }}
        >
          env box
          <br />
          <Button
            name="showEnvBg"
            className="m-1"
            size="sm"
            variant={toggleStyle.showEnvBg ? "dark" : "secondary"}
            onClick={(event) => {
              return setToggleStyle({
                ...toggleStyle,
                [event.target.name]: !toggleStyle[event.target.name],
              });
            }}
          >
            {toggleStyle.showEnvBg ? "hide" : "show"}
            {` `}bg
          </Button>
        </div>
      </div>
    );
  };

  //   console.log(formStyle);

  return (
    <section className="scroll-container test-page">
      {/* for testing */}
      <div
        className={`position-absolute top-0 start-0`}
        style={{
          zIndex: "2000",
          width: "100%",
        }}
      >
        {/* top buttons */}
        <div
          style={{
            paddingTop: `10%`,
            textAlign: `center`,
          }}
        >
          <Button
            name="showPWAData"
            className="m-1"
            size="sm"
            variant={toggleStyle.showPWAData ? "dark" : "secondary"}
            onClick={(event) => {
              return setToggleStyle({
                ...toggleStyle,
                [event.target.name]: !toggleStyle[event.target.name],
              });
            }}
          >
            {toggleStyle.showPWAData ? "Hide" : "Show"}
            {` `}PWA Data
          </Button>
          <Button
            name="showHeights"
            className="m-1"
            size="sm"
            variant={toggleStyle.showHeights ? "dark" : "secondary"}
            onClick={(event) => {
              return setToggleStyle({
                ...toggleStyle,
                [event.target.name]: !toggleStyle[event.target.name],
              });
            }}
          >
            {toggleStyle.showHeights ? "Hide" : "Show"}
            {` `}Heights
          </Button>
          <Button
            name="changeStyle"
            className="m-1"
            size="sm"
            variant={toggleStyle.changeStyle ? "dark" : "secondary"}
            onClick={(event) => {
              return setToggleStyle({
                ...toggleStyle,
                [event.target.name]: !toggleStyle[event.target.name],
              });
            }}
          >
            Change Heights
          </Button>
          <Button
            name="showEnvBox"
            className="m-1"
            size="sm"
            variant={toggleStyle.showEnvBox ? "dark" : "secondary"}
            onClick={(event) => {
              return setToggleStyle({
                ...toggleStyle,
                [event.target.name]: !toggleStyle[event.target.name],
              });
            }}
          >
            {toggleStyle.showEnvBox ? "Hide" : "Show"}
            {` `}EnvBox
          </Button>
        </div>
        <div className="position-relative">
          {/* showPDAData */}
          <PwaComponent />
          {/* changeStyle */}
          <StyleFormComponent />
        </div>
      </div>

      {/* env borders */}
      <EnvHeightComponent />

      {/* height borders */}
      <HeightGridsComponent />

      {/* end testing */}
      <div className="page-container" style={{ pointerEvents: `none` }}>
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
          <Row className="mb-3 position-absolute bottom-0 start-50 translate-middle-x">
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
          <Row className="mb-3 position-absolute bottom-0 start-50 translate-middle-x">
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
