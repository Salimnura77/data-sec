// ProfileImage.js
import React from 'react';
import { Card, CardImg,FormGroup } from 'reactstrap';

const ProfileImage = ({ previewImage }) => (
  <FormGroup>
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
);

export default ProfileImage;
