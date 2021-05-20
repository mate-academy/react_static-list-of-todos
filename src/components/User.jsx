import React from 'react';
import propTypes from 'prop-types';


const User = ({ name }) => <p>Name: <i>{name}</i></p>;

export default User;

User.propTypes = {
  name: propTypes.string.isRequired,
}
