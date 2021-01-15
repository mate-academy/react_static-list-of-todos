import React from 'react';
import { UserType } from '../Types/Types';

const User = ({ user }) => (
  <i>
    {user.name}
  </i>
);

User.propTypes = {
  user: UserType.isRequired,
};

export default User;
