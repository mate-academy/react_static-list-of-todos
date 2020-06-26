import React from 'react';
import ShapeUser from '../Shapes';

const User = ({ user }) => (
  <div>
    {user.name}
  </div>
);

User.propTypes = ShapeUser.isRequired;

export default User;
