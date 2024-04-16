import React from "react";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { FaUser, FaTruck, FaLayerGroup, FaUserTie } from "react-icons/fa";

const QuickActivityWrap = ({ data }) => {
  const columnMarginBottom = {
    marginBottom: "2rem",
  };

  const cardStyles = [
    { backgroundColor: "#0d6efd" }, // Total No. of super agents
    { backgroundColor: "#0d6efd" }, // Total No. of vendors
    { backgroundColor: "#0d6efd" }, // Total No. of vehicles
    { backgroundColor: "#0d6efd" }, // Total No. of Agents
  ];

  const iconComponents = [FaUser, FaLayerGroup, FaTruck, FaUserTie];

  return (
    <div className="quick_activity_wrap m-5">
      <Row>
        {iconComponents.map((IconComponent, index) => (
          <Col key={index} xs={12} sm={6} lg={3} style={columnMarginBottom}>
            <Link to={`/route${index}`} style={{ textDecoration: "none" }}>
              <Card className="single_quick_activity p-2" style={cardStyles[index]}>
                <CardBody>
                  <CardTitle className="text-light">Security</CardTitle>
                  <h3>
                    <span className="text-light">80%</span>
                  </h3>
                  <div style={{ fontSize: "50px", display: "flex", justifyContent: "end", alignItems: "start" }}>
                    {React.createElement(IconComponent, { color: "#ffffff" })}
                  </div>
                </CardBody>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default QuickActivityWrap;
