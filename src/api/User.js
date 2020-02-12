import React from 'react';
import PropTypes from 'prop-types';

function User(props) {
  const { name } = props;

  return (
    <td>{name}</td>
  );
}

User.propTypes = {
  name: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default User;
