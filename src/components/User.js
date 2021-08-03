import React from 'react';

const User = ({ name }) => (
  <>
    <p className="name">
      user name
      {' - '}
      <strong>{name}</strong>
    </p>
  </>
);

export default User;
