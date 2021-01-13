import React from 'react';
import { TypeUser } from '../../types';

function User({ name }) {
  return (
    <strong className="user-name">
      {name}
    </strong>
  );
}

User.propTypes = TypeUser;

export default User;
