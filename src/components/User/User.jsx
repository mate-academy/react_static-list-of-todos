import React from 'react';
import './User.css';

export function User({ user }) {
  return (
    <span className="user-view">
      {user.name}
    </span>
  );
}
