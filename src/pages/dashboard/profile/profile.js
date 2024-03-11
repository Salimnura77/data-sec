// Profile.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Profile = () => {
  const [username, setUsername] = useState('YourUsername');
  const [password, setPassword] = useState('YourPassword');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSaveChanges = () => {
    // Implement logic to save changes (e.g., send a request to the server)

    // For demonstration purposes, we'll log the changes to the console
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <h2 className="text-center mb-4">Edit Profile</h2>
          <Form>
            <FormGroup>
              <Label for="username">Username:</Label>
              <Input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password:</Label>
              <Input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </FormGroup>
            <div className="text-center">
              <Button color="primary" onClick={handleSaveChanges}>
                Save Changes
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
