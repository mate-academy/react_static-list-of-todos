import React from 'react';

function User(props) {
  const { user } = props;
  return (
    <td>{user.name}</td>
  );
}

export default User;
