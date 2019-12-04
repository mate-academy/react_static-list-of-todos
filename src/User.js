import React from 'react';

const User = ({ userData: { username } }) => (
  <td>
    {username}
  </td>
);

export default User;
