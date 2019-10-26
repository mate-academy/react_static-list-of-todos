import React from 'react';
import './user.css';

function User({ user }) {
  return (
    <td><a href={`mailto:${user.email}`}>{ user.name }</a></td>
  );
}

export default User;
