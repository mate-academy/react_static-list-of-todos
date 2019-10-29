import React from 'react';
import PropTypes from 'prop-types';

function User({ name }) {
  return (
    <>
      {name.name}
    </>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
};

export default User;
