import React from 'react';
import PropTypes from 'prop-types';

function User({ data }) {
  return (
    <span>
      {data.name}
    </span>
  );
}

User.propTypes = {
  data: PropTypes.string.isRequired,
};

export default User;
