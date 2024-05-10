import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import { FaUser, FaTruck, FaLayerGroup, FaUserTie } from "react-icons/fa";

const QuickActivityWrap = ({ data }) => {
  const cardStyles = { backgroundColor: "#f8f9fa" };

  return (
    <div className="quick_activity_wrap m-5">
      <Card className="single_quick_activity p-4" style={cardStyles}>
        <CardBody>
          <CardTitle className="text-dark">Welcome, admin</CardTitle>
          <h3>
            <span className="text-dark">80%</span>
          </h3>
          <div className="icon-container">
            {/* <FaUser color="#000" size={50} style={{ opacity: 0.5 }} />
            <FaLayerGroup color="#000" size={50} style={{ opacity: 0.5 }} />
            <FaTruck color="#000" size={50} style={{ opacity: 0.5 }} />
            <FaUserTie color="#000" size={50} style={{ opacity: 0.5 }} /> */}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default QuickActivityWrap;
