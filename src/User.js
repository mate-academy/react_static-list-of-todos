import React from 'react';

const User = ({ user: { username } }) => (
  <td style={{ textAlign: 'center' }}>
    {username}
  </td>
);

export default User;
