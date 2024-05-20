import React from "react";
import { Card } from "react-bootstrap";

function  ServiceCard({ title, description, icon }) {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="mt-3">{icon}</div>
      </Card.Body>
    </Card>
  );
}

export default ServiceCard;
