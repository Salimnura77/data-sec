import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, InputGroup, Input, Spinner, InputGroupText, Container, Card, CardBody, CardTitle, CardText, NavLink, Col, Row } from 'reactstrap';
import { FaRegEye, FaEyeSlash } from 'react-icons/fa';
import { CiDeliveryTruck } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import './login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleFormSubmit = async () => {
    // Validation checks
    if (!email || !password) {
      alert('Email and password are required fields.');
      return;
    }
    if (password.length < 6) {
      alert('Password should be at least six characters long.');
      return;
    }
    setIsLoading(true);
    
    try {
      // Send login request to API
      const response = await fetch('http://localhost:3002/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        // Login successful, extract token from response
        const data = await response.json();
        const token = data.token;

        // Store token in local storage
        localStorage.setItem('authToken', token);
        console.log('Auth Token:', token);

        // Navigate to dashboard
        navigate('/dashboard');
      } else {
        // Login failed, display error message
        const data = await response.json();
        alert(data.message); // Display error message from API
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('An error occurred while logging in. Please try again later.');
    }
  };

  // useEffect(() => {
  //   const authToken = localStorage.getItem('authToken');
  //   if (authToken) {
  //     navigate('/dashboard');
  //   }
  // }, [navigate]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='login'>
      <Container>
        {isLoading ? (
          <div className="spinner-container">
            <Spinner />
          </div>
        ) : (
          <Row>
            <Col md={3}></Col>
            <Col className='m-3 ' md={6}>
              <Card className='m-5  ' style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <CardBody>
                  <CardTitle tag='h4' className='text-center'>
                    <div className='m-3 '> <CiDeliveryTruck style={{ fontSize: '50px', color: ' #000' }} /> </div>
                    <b>Welcome!</b>
                  </CardTitle>
                  <CardText className='text-center'>Sign in to continue.</CardText>
                  <Form onSubmit={(e) => { e.preventDefault(); handleFormSubmit(); }}>
                    <FormGroup>
                      <Label>Email</Label>
                      <InputGroup>
                        <Input
                          name='email'
                          type='email'
                          placeholder='example@email.com'
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <Label>Password</Label>
                      <InputGroup>
                        <Input
                          name='password'
                          type={passwordVisible ? 'text' : 'password'}
                          placeholder='password'
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <InputGroupText addonType='append'>
                          <NavLink color='light' onClick={togglePasswordVisibility}>
                            {passwordVisible ? <FaRegEye /> : <FaEyeSlash />}
                          </NavLink>
                        </InputGroupText>
                      </InputGroup>
                    </FormGroup>
                    <div className='d-grid align-items-center'>
                      <Button color='dark' style={{ marginTop: '1rem' }} type='submit' disabled={isLoading}>
                        {isLoading ? <Spinner size="sm" color="light" /> : 'Log in'}
                      </Button>
                      <p style={{ textAlign: 'center', marginTop: '1rem' }}>
                        Don't have an account?{' '}
                        <NavLink href='/sign-up' style={{ textDecoration: 'underline' }}>
                          Sign up
                        </NavLink>
                      </p>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
            <Col md={3}></Col>
          </Row>
        )}
      </Container>
    </div>
  );
}
