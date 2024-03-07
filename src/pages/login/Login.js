import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input as ReactstrapInput, Container, Card, CardBody, CardTitle, CardText , NavLink,Col,Row} from 'reactstrap';



export default function LoginFinal() {
  return (
    <Container>
      <Row>
        <Col md={3}></Col>
        <Col  className=" m-3" md={6}>
          <Card className='m-5 bg-light'  style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <CardBody >
          <CardTitle tag="h4" className='text-center'>
            <b>Welcome!</b>
          </CardTitle>
          <CardText className='text-center'>Sign in to continue.</CardText>
          <Form>
            <FormGroup>
              <Label>Email</Label>
              <ReactstrapInput
                name="email"
                type="email"
                placeholder="johndoe@email.com"
              />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <ReactstrapInput
                name="password"
                type="password"
                placeholder="password"
              />
            </FormGroup>
            <div className=' d-grid align-items-center'>
            <Button color="primary " style={{ marginTop: '1rem' }}>
              Log in
            </Button>
            <p style={{ alignSelf: 'center', marginTop: '1rem' }}>
              Don't have an account? < NavLink href="/sign-up">Sign up</ NavLink>
            </p>
            </div>
          </Form>
        </CardBody>
      </Card>
        </Col>
        <Col md={3}></Col>
      </Row>
      
    </Container>
  );
}
