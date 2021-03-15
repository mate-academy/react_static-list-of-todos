import React from 'react';
import PropTypes from 'prop-types';

function User({ name }) {
  return (
    <span className="Todo__user">
      {name}
    </span>
  );
}

User.propTypes = ({
  name: PropTypes.string.isRequired,
});

export default User;
