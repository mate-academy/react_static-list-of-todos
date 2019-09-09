import React from 'react';
import { UserProps } from '../constants/PropTypes'
import './User.css';

function User({ data }) {
  return (
    <div>
      <p>
        {data.name}
      </p>
      <p>
        {data.email}
      </p>
    </div>
  );
}

User.propTypes = UserProps;

export default User;