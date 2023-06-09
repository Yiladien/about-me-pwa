import React, { useState } from "react";
import { DashSquare, PlusSquare } from "react-bootstrap-icons";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import InputGroup from "react-bootstrap/InputGroup";

const ViewHeightForm = () => {
  const [formData, setFormData] = useState({ elements: [] });

  const handleAddElement = () => {
    setFormData({
      ...formData,
      elements: [
        ...formData.elements,
        {
          layerName: `NewBox ${formData.elements.length + 1}`,
          // borderColor: `#FFFFFF`,
          // borderStyle: `solid`,
          // borderWidth: ``,
          backgroundColor: `#0000FFFF`,
          backgroundColorTransparency: `FF`,
          top: `0px`,
          height: 100,
          heightType: `vh`,
          zIndex: `${formData.elements.length + 1001}`,
        },
      ],
    });
  };

  const handleRemoveElement = (event) => {
    console.log(event);

    // setFormData({
    //   ...formData,
    //   elements: [
    //     ...formData.elements,
    //     {
    //       layerName: `NewBox ${formData.elements.length + 1}`,
    //       borderColor: `#FFFFFF`,
    //       top: `0px`,
    //       left: ``,
    //       height: `100vh`,
    //       zIndex: `${formData.elements.length + 1001}`,
    //     },
    //   ],
    // });
  };

  const handleFormChange = (event, e2) => {
    console.log("handleFormChange");
    console.log(event);
  };

  console.log(formData);

  return (
    <div
      className="scroll-container"
      style={{
        border: "2px solid white",
        position: "relative",
        height: "100vh",
        top: "0px",
        left: "0px",
      }}
    >
      <div
        style={{
          border: "2px solid white",
          position: "absolute",
          top: "5%",
          left: "5%",
          padding: ".25rem",
          zIndex: "1100",
          backgroundColor: "#606060",
        }}
      >
        <Row>
          <Col>
            <PlusSquare onClick={handleAddElement} />
          </Col>
          <Col>
            <DashSquare onClick={handleRemoveElement} />
          </Col>
        </Row>
      </div>
      {formData.elements.length
        ? formData.elements.map((el, index) => (
            <div
              key={`element-${index}`}
              id={`element-${index}`}
              data-el-index={index}
              style={{
                // borderColor: el.borderColor,
                // borderWidth: `${el.borderWidth}px`,
                // borderStyle: `solid`,
                backgroundColor: el.backgroundColor,
                position: "absolute",
                height: `${el.height}${el.heightType}`,
                width: `${100 / formData.elements.length}vw`,
                maxWidth: `${100 / formData.elements.length}vw`,
                zIndex: `${1000 + index}`,
                top: "0px",
                left: `${(100 / formData.elements.length) * index}%`,
                paddingTop: "30%",
              }}
            >
              <Row className="mb-3 text-white">
                <Col xs={12}>
                  <InputGroup size="sm" className="mb-3">
                    <Form.Control
                      data-el-index={index}
                      name="heightType"
                      type="text"
                      value={el.heightType}
                      onChange={handleFormChange}
                    />

                    <DropdownButton
                      variant="secondary"
                      title={el.heightType}
                      id="height-unit-dropdown"
                      align="end"
                      onSelect={handleFormChange}
                    >
                      <Dropdown.Item
                        eventKey={`vh`}
                        active={el.heightType === "vh"}
                      >
                        vh
                      </Dropdown.Item>
                      <Dropdown.Item
                        eventKey={`svh`}
                        active={el.heightType === "svh"}
                      >
                        svh
                      </Dropdown.Item>
                      <Dropdown.Item
                        eventKey={`lvh`}
                        active={el.heightType === "lvh"}
                      >
                        lvh
                      </Dropdown.Item>
                      <Dropdown.Item
                        eventKey={`dvh`}
                        active={el.heightType === "dvh"}
                      >
                        dvh
                      </Dropdown.Item>
                      <Dropdown.Item
                        eventKey={`%`}
                        active={el.heightType === "%"}
                      >
                        %
                      </Dropdown.Item>
                    </DropdownButton>
                  </InputGroup>
                </Col>
                <Form.Group as={Col} controlId="formHeight">
                  <Form.Label>height:</Form.Label>
                  <Form.Control
                    data-el-index={index}
                    size="sm"
                    name="viewHeight"
                    type="text"
                    value={el.height}
                    onChange={handleFormChange}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formBackgroundColor">
                  <Form.Label>background-color:</Form.Label>
                  <Form.Control
                    data-el-index={index}
                    size="sm"
                    name="backgroundColor"
                    type="color"
                    value={el.backgroundColor}
                    title="Choose your color"
                    onChange={handleFormChange}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Row>
            </div>
          ))
        : null}
    </div>
  );
};

export default ViewHeightForm;
