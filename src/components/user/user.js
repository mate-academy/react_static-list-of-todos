import React from 'react';
import PropTypes from 'prop-types';

const User = ({ person }) => <td>{person.name}</td>;

User.propTypes
  = {
    person: PropTypes
      .oneOfType([PropTypes.object])
      .isRequired,
  };

export default User;
