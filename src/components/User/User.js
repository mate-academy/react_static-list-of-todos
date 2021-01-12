import React from 'react';
import PropTypes from 'prop-types';

function User({ name }) {
  return (
    <strong className="user-name">
      {name}
    </strong>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
};

export default User;
