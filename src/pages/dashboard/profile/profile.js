import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Card, CardImg, CardBody } from 'reactstrap';
import Image from "../../../asset/bash.png";

const ProfilePage = () => {
  const initialProfileData = {
    name: 'Bashir muhammad jibrin',
    email: 'jibrinb2@gmail.com',
    password: '123456',
    bio: 'Hello! I\'m Bashir, a passionate professional based in Kano. Armed with a degree in chemistry, I\'ve honed my skills and expertise through experiences at Your PreviousCurrent Employers or Projects.',
    image: Image,
  };

  const [profileData, setProfileData] = useState({ ...initialProfileData });
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [newImage, setNewImage] = useState(null);

  const toggleEditModal = () => {
    setEditModalOpen(!editModalOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setNewImage(file);
  };

  const handleSave = () => {
    if (newImage) {
      const reader = new FileReader();
  
      reader.onloadend = () => {
        setProfileData({
          ...profileData,
          image: reader.result,
        });
        toggleEditModal();
      };
  
      reader.readAsDataURL(newImage);
    } else {
      toggleEditModal();
    }
  };

  const resetProfile = () => {
    setProfileData({ ...initialProfileData });
  };

  return (
    <Container fluid className="mt-5">
      <Row>
        <Col md={6} className="offset-md-3">
          <Card>
            <CardBody>
              <Row className="mb-3">
                <Col md={4} className="text-center">
                  <CardImg src={profileData.image} alt="Profile" className="rounded-circle profile-image" />
                  <Button color="primary" onClick={toggleEditModal} className="mt-3" block>Edit Profile</Button>
                </Col>
                <Col md={8}>
                  <h2>{profileData.name}</h2>
                  <p>Email: {profileData.email}</p>
                  <p>Password: {profileData.password}</p>
                  <p>Bio: {profileData.bio}</p>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Modal isOpen={editModalOpen} toggle={toggleEditModal} className="custom-modal">
        <ModalHeader toggle={toggleEditModal} className="bg-primary text-white">Edit Profile</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                value={profileData.name}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                value={profileData.email}
                onChange={handleInputChange}
                // Add required attribute for validation
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                value={profileData.password}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="bio">Bio</Label>
              <Input
                type="textarea"
                name="bio"
                id="bio"
                value={profileData.bio}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="image">Profile Image</Label>
              <Input
                type="file"
                name="image"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave}>Save</Button>{' '}
          <Button color="secondary" onClick={toggleEditModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
};

export default ProfilePage;
