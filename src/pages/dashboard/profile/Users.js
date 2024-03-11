import React, { useState } from 'react';
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import Image from "../../../asset/bash.png";
const UserProfile = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'bashir jibrin', email: 'jibrinb2@.com', avatar: Image },
    { id: 2, name: 'nazif abdul', email: 'nazifexample.com', avatar: Image },
  ]);

  const [modal, setModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState({ id: null, name: '', email: '', avatar: '' });
  const [idCounter, setIdCounter] = useState(users.length + 1); // Initialize counter

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    toggleModal();
  };

  const handleDelete = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  const handleSave = () => {
    // Update or add the user based on whether it's an edit or add action
    if (selectedUser.id) {
      const updatedUsers = users.map((user) => (user.id === selectedUser.id ? selectedUser : user));
      setUsers(updatedUsers);
    } else {
      setUsers([...users, { ...selectedUser, id: idCounter }]);
      setIdCounter(idCounter + 1); // Increment counter for the next user
    }

    toggleModal();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const avatarUrl = event.target.result;
        setSelectedUser((prevUser) => ({ ...prevUser, avatar: avatarUrl }));
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                {user.avatar && <img src={user.avatar} alt="Avatar" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />}
              </td>
              <td>
                <Button color="primary" onClick={() => handleEdit(user)}>
                  Edit
                </Button>{' '}
                <Button color="danger" onClick={() => handleDelete(user.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Button color="primary" onClick={() => { setSelectedUser({ id: null, name: '', email: '', avatar: '' }); toggleModal(); }}>
        Add User
      </Button>

      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>{selectedUser.id ? 'Edit User' : 'Add User'}</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="text" name="name" id="name" value={selectedUser.name} onChange={handleInputChange} />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" value={selectedUser.email} onChange={handleInputChange} />
            </FormGroup>
            <FormGroup>
              <Label for="avatar">Avatar</Label>
              <Input type="file" name="avatar" id="avatar" onChange={handleFileChange} />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave}>
            Save
          </Button>{' '}
          <Button color="danger" onClick={toggleModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default UserProfile;
