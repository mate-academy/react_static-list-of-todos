import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';
import person from './person.png';

export const User = ({ name }) => (
  <div className="userContainer">
    <img src={person} alt="user" />
    <p className="userName">{name}</p>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};
