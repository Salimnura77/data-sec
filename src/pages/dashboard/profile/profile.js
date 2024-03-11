// Profile.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Card, CardImg, Alert } from 'reactstrap';

const Profile = () => {
  const [username, setUsername] = useState('YourUsername');
  const [password, setPassword] = useState('YourPassword');
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];

    if (selectedImage) {
      setImage(selectedImage);
      setPreviewImage(URL.createObjectURL(selectedImage));
    }
  };

  const handleSaveChanges = () => {
    // Implement logic to save changes (e.g., send a request to the server)

    // For demonstration purposes, we'll log the changes to the console
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Image:', image);

    // Show success message
    setSuccessMessage('Changes saved successfully!');

    // Clear the image and preview after saving changes
    setImage(null);
    setPreviewImage(null);

    // Clear success message after a few seconds
    setTimeout(() => {
      setSuccessMessage(null);
    }, 3000);
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <h2 className="text-center mb-4">Edit Profile</h2>
          <Form>
            <FormGroup>
              <Label for="username">Username:</Label>
              <Input type="text" id="username" value={username} onChange={handleUsernameChange} />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password:</Label>
              <Input type="password" id="password" value={password} onChange={handlePasswordChange} />
            </FormGroup>
            <FormGroup>
              <Label for="image">Profile Image:</Label>
              <Input type="file" id="image" onChange={handleImageChange} />
              {previewImage && (
                <Card className="mt-2">
                  <CardImg
                    top
                    width="100%"
                    src={previewImage}
                    alt="Profile Image"
                    style={{ maxWidth: '200px', maxHeight: '200px', margin: 'auto', display: 'block' }}
                  />
                </Card>
              )}
            </FormGroup>
            <div className="text-center">
              <Button color="primary" onClick={handleSaveChanges}>
                Save Changes
              </Button>
            </div>
          </Form>
          {successMessage && (
            <Alert color="success" className="mt-3">
              {successMessage}
            </Alert>
          )}

          {/* Display current values after saving changes */}
          {successMessage && (
            <div className="mt-3">
              <h4 className="text-center mb-2">Current Values</h4>
              <p><strong>Username:</strong> {username}</p>
              <p><strong>Password:</strong> {password}</p>
              {previewImage && (
                <Card style={{ maxWidth: '200px', maxHeight: '200px', margin: 'auto', display: 'block' }}>
                  <CardImg
                    top
                    width="100%"
                    src={previewImage}
                    alt="Profile Image"
                  />
                </Card>
              )}
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
