import React from 'react';
import PropTypes from 'prop-types';
import './User.scss'

export function User({ name }) {
  return (
    <div className='user-name'>
      <span className='name-item'>
        Name:
      </span>
      {' '}
      {name}
    </div>
  );
}

User.protoTypes = {
  name: PropTypes.string.isRequired,
};

