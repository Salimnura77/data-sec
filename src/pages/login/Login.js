import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, InputGroup, Input, InputGroupText, Container, Card, CardBody, CardTitle, CardText, NavLink, Col, Row } from 'reactstrap';
import { FaRegEye, FaEyeSlash } from 'react-icons/fa';
import { SiDataverse } from 'react-icons/si';
import { Oval as Loader } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import './login.css';

export default function LoginFinal() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate(); 

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleFormSubmit = () => {
   
    navigate('/dashboard');
  };

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
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <Loader type='Oval' color='#007BFF' height={50} width={50} />
          </div>
        ) : (
          <Row>
            <Col md={3}></Col>
            <Col className='m-3' md={6}>
              <Card className='m-5 bg-light' style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <CardBody>
                  <CardTitle tag='h4' className='text-center'>
                    <div className='m-3 '> <SiDataverse style={{ fontSize: '50px', color: ' #007BFF' }} /> </div>
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
                          placeholder='johndoe@email.com'
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
                      <Button color='primary' style={{ marginTop: '1rem' }} type='submit'>
                        Log in
                      </Button>
                      <p style={{ textAlign: 'center', marginTop: '1rem' }}>
                        Don't have an account? <NavLink href='/sign-up'>Sign up</NavLink>
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
