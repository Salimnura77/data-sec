import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const AddBookingForm = ({ onAddBooking }) => {
  const [formData, setFormData] = useState({
    customerName: '',
    pickupLocation: '',
    deliveryLocation: '',
    truckType: '', // New field for truck type
    truckQuantity: 0, // New field for truck quantity
    status: 'Pending' // Default status
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onAddBooking(formData); // Pass form data to the parent component
    setFormData({
      customerName: '',
      pickupLocation: '',
      deliveryLocation: '',
      truckType: '',
      truckQuantity: 0,
      status: 'Pending'
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="customerName">Customer Name</Label>
        <Input
          type="text"
          name="customerName"
          id="customerName"
          value={formData.customerName}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="pickupLocation">Pickup Location</Label>
        <Input
          type="text"
          name="pickupLocation"
          id="pickupLocation"
          value={formData.pickupLocation}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="deliveryLocation">Delivery Location</Label>
        <Input
          type="text"
          name="deliveryLocation"
          id="deliveryLocation"
          value={formData.deliveryLocation}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="truckType">Truck Type</Label>
        <Input
          type="select"
          name="truckType"
          id="truckType"
          value={formData.truckType}
          onChange={handleChange}
          required
        >
          <option value="">Select Truck Type</option>
          <option value="container">container</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="truckQuantity">Truck Quantity</Label>
        <Input
          type="number"
          name="truckQuantity"
          id="truckQuantity"
          value={formData.truckQuantity}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <Button type="submit" color="dark">Add Booking</Button>
    </Form>
  );
};

export default AddBookingForm;
