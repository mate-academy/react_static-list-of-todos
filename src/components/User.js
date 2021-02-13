import React from 'react';
import PropTypes from 'prop-types';

export function User({ name }) {
  return (
    <>
      <strong>
        <span>
          Name:
          {' '}
          {name}
        </span>
      </strong>
    </>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
};

export default User;
