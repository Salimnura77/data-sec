import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, InputGroup, Input, InputGroupText,Spinner, Container, Card, CardBody, CardTitle, CardText, NavLink, Col, Row } from 'reactstrap';
import { FaRegEye, FaEyeSlash } from 'react-icons/fa';
import { CiDeliveryTruck } from "react-icons/ci";
import { Oval as Loader } from 'react-loader-spinner';
import axios from 'axios';
import "./register.css";

export default function Register() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    // confirmPassword: '',
  });
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleRegister = () => {
    // Validation checks
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword) {
      alert('All fields are required.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    if (formData.password.length < 6) {
      alert('Password should be at least six characters long.');
      return;
    }

    axios.post('http://localhost:3002/api/register', formData)
      .then(response => {
        // Handle successful registration
        console.log(response.data); // Log the response from the server
        setRegistrationSuccess(true); // Set registration success state to true
      })
      .catch(error => {
        // Handle registration error
        console.error('Error registering user:', error);
        alert('An error occurred while registering. Please try again later.');
      });
  };

  return (
    <div className='register'>
      {isLoading ? (
      <div className="spinner-container">
      <Spinner />
    </div>
    
     
      

      ) : (
        <Container>
          <Row>
            <Col md={3}></Col>
            <Col className="m-3" md={6}>
              <Card className='m-3 ' style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <CardBody>
                  <CardTitle tag="h4" className='text-center'>
                    <div className='m-3 '> <CiDeliveryTruck style={{ fontSize: '50px', color: ' #000' }} /> </div>
                    <b>Register</b>
                  </CardTitle>
                  {registrationSuccess ? (
                    <div className="success-message text-center text-success">
                      Registration successful! You can now log in.
                      <NavLink href="/login " className='text-primary'>Log in</NavLink>
                    </div>
                  ) : (
                    <>
                      <CardText className='text-center'>Create a new account.</CardText>
                      <Form>
                        <FormGroup>
                          <Label>First Name</Label>
                          <Input
                            name="firstName"
                            type="text"
                            placeholder="John"
                            value={formData.firstName}
                            onChange={handleInputChange}
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label>Last Name</Label>
                          <Input
                            name="lastName"
                            type="text"
                            placeholder="Doe"
                            value={formData.lastName}
                            onChange={handleInputChange}
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label>Email</Label>
                          <InputGroup>
                            <Input
                              name="email"
                              type="email"
                              placeholder="johndoe@email.com"
                              value={formData.email}
                              onChange={handleInputChange}
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <Label>Password</Label>
                          <InputGroup>
                            <Input
                              name="password"
                              type={passwordVisible ? 'text' : 'password'}
                              placeholder="password"
                              value={formData.password}
                              onChange={handleInputChange}
                            />
                            <InputGroupText addonType="append">
                              <NavLink color="light" onClick={togglePasswordVisibility}>
                                {passwordVisible ? <FaRegEye /> : <FaEyeSlash />}
                              </NavLink>
                            </InputGroupText>
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <Label>Confirm Password</Label>
                          <InputGroup>
                            <Input
                              name="confirmPassword"
                              type={passwordVisible ? 'text' : 'password'}
                              placeholder="confirm password"
                              value={formData.confirmPassword}
                              onChange={handleInputChange}
                            />
                            <InputGroupText addonType="append">
                              <NavLink color="light" onClick={togglePasswordVisibility}>
                                {passwordVisible ? <FaRegEye /> : <FaEyeSlash />}
                              </NavLink>
                            </InputGroupText>
                          </InputGroup>
                        </FormGroup>
                        <div className='d-grid align-items-center'>
                          <Button color="dark" style={{ marginTop: '1rem' }} onClick={handleRegister}>
                            Register
                          </Button>
                          <p style={{ textAlign: 'center', marginTop: '1rem' }}>
                            Already have an account? <NavLink style={{ textDecoration: 'underline' }} href="/login">Log in</NavLink>
                          </p>
                        </div>
                      </Form>
                    </>
                  )}
                </CardBody>
              </Card>
            </Col>
            <Col md={3}></Col>
          </Row>
        </Container>
      )}
    </div>
  );
}
