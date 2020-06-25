import React from 'react';
import { ShapeUser } from '../Shapes';

export const User = ({ userInfo }) => (
  <p>
    {` Name: ${userInfo.name}`}
    <br />
    {`Email: ${userInfo.email}`}
  </p>
);

User.propTypes = {
  userInfo: ShapeUser.isRequired,
};
