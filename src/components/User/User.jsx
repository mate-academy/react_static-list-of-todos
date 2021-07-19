import React from 'react';
import PropTypes from 'prop-types';

export function User({ id, name }) {
  return (
    <p>
      {`User: ${name}`}
    </p>
  );
}

User.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
