import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Avatar from 'react-avatar';

import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Card, CardImg, CardBody } from 'reactstrap';

const ProfilePage = () => {
  const [profileData, setProfileData] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [newImage, setNewImage] = useState(null);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      // If token doesn't exist, navigate the user to the login page
      navigate('/login');
      return;
    }
  
    axios.get('http://localhost:3002/api/Profile', { headers: { Authorization: `Bearer ${token}` } })
      .then(response => {
        setProfileData(response.data);
      })
      .catch(error => {
        console.error('Error fetching profile data', error);
      });
  }, [navigate]);
  
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

  const handleProfileUpdate = () => {
    axios.put('http://localhost:3002/api/Profile', profileData, { headers: { Authorization: `Bearer ${token}` } })
      .then(response => {
        setProfileData(response.data);
        setEditModalOpen(false);
      })
      .catch(error => {
        console.error('Error updating profile data', error);
      });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setNewImage(file);
  };

  const handleSave = () => {
    if (newImage) {
      const formData = new FormData();
      formData.append('image', newImage);
      axios.post('/api/upload', formData, { headers: { Authorization: `Bearer ${token}` } })
        .then(response => {
          setProfileData({
            ...profileData,
            image: response.data.imageUrl,
          });
          setEditModalOpen(false);
        })
        .catch(error => {
          console.error('Error uploading image', error);
        });
    } else {
      handleProfileUpdate();
    }
  };

  return (
    <Container fluid className="mt-5">
      {profileData ? (
        <>
         <Row>
    <Col md={6} className="offset-md-3">
      <Card>
        <CardBody>
          <Row className="mb-3 align-items-center">
            <Col md={4} className="text-center">
            <Avatar name={`${profileData.firstName} ${profileData.lastName}`} round size="150" />

              <Button color="dark" onClick={toggleEditModal} className="mt-3 mx-auto d-block" block>Edit Profile</Button>
            </Col>
            <Col md={8}>
              <h2>{profileData.firstName} {profileData.lastName}</h2>
              <p>Email: {profileData.email}</p>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  </Row>

          <Modal isOpen={editModalOpen} toggle={toggleEditModal} className="custom-modal">
            <ModalHeader toggle={toggleEditModal} className="bg-dark text-white">Edit Profile</ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    value={profileData.firstName}
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
                    required
                  />
                </FormGroup>
                
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="dark" onClick={handleSave}>Save</Button>{' '}
              <Button color="light" onClick={toggleEditModal}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
};

export default ProfilePage;
