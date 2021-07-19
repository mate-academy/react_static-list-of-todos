import React from 'react';
import propTypes from 'prop-types';

export function User({ name }) {
  return (
    <p>
      {`User Name: ${name}`}
    </p>
  );
}

User.propTypes = {
  name: propTypes.string.isRequired,
};
