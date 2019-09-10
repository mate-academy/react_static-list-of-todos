import React from 'react';
import './User.css';

const User = ({ user }) => (
  <>
    <div className="header">{user.name}</div>
    <div className="item meta">
      <i className="mail icon" />
      <a href={`mailto:${user.email}`} className="content">{user.email}</a>
    </div>
  </>
);

export default User;
