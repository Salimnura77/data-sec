import React, { useState } from 'react';
import { Button, Form, Input, List, Space, Upload, message, Modal } from 'antd';
import { EditOutlined, DeleteOutlined, UploadOutlined } from '@ant-design/icons';

const DataManagement = () => {
  const [data, setData] = useState([
    { id: 1, name: 'My data', description: 'Bashir confidential files', file: null },
    { id: 2, name: 'mustys data', description: 'mustys data', file: null },
  ]);

  const [editData, setEditData] = useState(null);

  const handleAddData = (values) => {
    const newData = {
      id: Date.now(),
      name: values.name,
      description: values.description,
      file: values.file ? values.file.file : null,
    };
    setData((prevData) => [...prevData, newData]);
  };

  const handleEditData = (id, values) => {
    setData((prevData) =>
      prevData.map((item) => (item.id === id ? { ...item, ...values } : item))
    );
    setEditData(null); // Close the modal after editing
  };

  const handleDeleteData = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const beforeUpload = (file) => {
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('File must be smaller than 2MB!');
    }
    return isLt2M;
  };

  const customRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess();
    }, 0);
  };

  const showEditModal = (item) => {
    setEditData(item);
    Modal.confirm({
      title: 'Edit Data',
      content: (
        <Form
          initialValues={{ name: item.name, description: item.description }}
          onFinish={(values) => handleEditData(item.id, values)}
        >
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input placeholder="Enter name" />
          </Form.Item>
          <Form.Item name="description" label="Description" rules={[{ required: true }]}>
            <Input.TextArea placeholder="Enter description" />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Save Changes
          </Button>
        </Form>
      ),
    });
  };

  return (
    <div>
      <Form onFinish={handleAddData} layout="vertical">
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input placeholder="Enter name" />
        </Form.Item>
        <Form.Item name="description" label="Description" rules={[{ required: true }]}>
          <Input.TextArea placeholder="Enter description" />
        </Form.Item>
        <Form.Item name="file" label="File">
          <Upload
            beforeUpload={beforeUpload}
            customRequest={customRequest}
            maxCount={1}
            listType="picture"
          >
            <Button icon={<UploadOutlined />}>Upload File</Button>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add Data
          </Button>
        </Form.Item>
      </Form>

      <List
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Space>
                <Button
                  key="edit"
                  onClick={() => showEditModal(item)}
                >
                  Edit
                </Button>
                <DeleteOutlined key="delete" onClick={() => handleDeleteData(item.id)} />
              </Space>,
            ]}
          >
            <List.Item.Meta title={item.name} description={item.description} />
            {item.file && <img src={item.file.thumbUrl} alt="File" style={{ maxWidth: '100px' }} />}
          </List.Item>
        )}
      />
    </div>
  );
};

export default DataManagement;
