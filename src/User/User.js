import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name, email, phone }) => (
  <>
    <h2><i>{name}</i></h2>
    <p><u>{email}</u></p>
    <h4><u>{phone}</u></h4>
  </>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
