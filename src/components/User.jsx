import React from 'react';

export const User = ({ name, email, phone }) => (
  <div className="user">
    <h3>{name}</h3>
    <p>{email}</p>
    <p>{phone}</p>
  </div>
);
