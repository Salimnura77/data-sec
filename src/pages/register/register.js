import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, InputGroup, Input, InputGroupText, Container, Card, CardBody, CardTitle, CardText, NavLink, Col, Row } from 'reactstrap';
import { FaRegEye, FaEyeSlash } from 'react-icons/fa';
import { SiDataverse } from 'react-icons/si';
import { Oval as Loader } from 'react-loader-spinner';
import "./register.css";

export default function Register() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  useEffect(() => {
    // Simulate loading for 2 seconds
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
    // Simulate successful registration
    // You can replace this with your actual registration logic
    // If registration is successful, setRegistrationSuccess(true)

    setRegistrationSuccess(true);
  };

  return (
    <div className='register'>
      {isLoading ? (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
          <Loader type="Oval" color="#007BFF" height={50} width={50} />
        </div>
      ) : (
        <Container>
          <Row>
            <Col md={3}></Col>
            <Col className="m-3" md={6}>
              <Card className='m-3 bg-light' style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <CardBody>
                  <CardTitle tag="h4" className='text-center'>
                    <div className='m-3 '> <SiDataverse style={{ fontSize: '50px', color: ' #007BFF' }} /> </div>
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
                          <Button color="primary" style={{ marginTop: '1rem' }} onClick={handleRegister}>
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
