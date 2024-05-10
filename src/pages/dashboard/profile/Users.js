import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Alert } from 'reactstrap';

const UserProfile = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3002/api/users');
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error(error);
      setError('Failed to fetch user data');
    } finally {
      setLoading(false);
    }
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:3002/api/users`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Failed to update user');
      }
      fetchUserData(); // Fetch updated user data after edit
      toggleModal();
    } catch (error) {
      console.error(error);
      setError('Failed to update user');
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (userId) => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:3002/api/${userId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete user');
      }
      fetchUserData(); // Fetch updated user data after delete
    } catch (error) {
      console.error(error);
      setError('Failed to delete user');
    } finally {
      setLoading(false);
    }
  };
  

  const editUser = (user) => {
    setEditingUser(user);
    setFormData({
      id: user._id, // Use user._id to get the ID of the user being edited
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email
    });
    toggleModal();
  };
  

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <Alert color="danger">{error}</Alert>}
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user,index) => (
            <tr key={user._id}>
               <td>{index + 1}</td>

              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>
                <Button className='m-1' color="dark" onClick={() => deleteUser(user._id)}>Delete</Button>
                <Button className='m-1' color="light" onClick={() => editUser(user)}>Edit</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Edit User</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="firstName">First Name</Label>
              <Input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} required />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">Last Name</Label>
              <Input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} required />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required />
            </FormGroup>
            <Button type="submit" color="dark" disabled={loading}>Save</Button>{' '}
            <Button color="light" onClick={toggleModal} disabled={loading}>Cancel</Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default UserProfile;
