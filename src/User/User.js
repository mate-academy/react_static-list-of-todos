import React from 'react';
import PropTypes from 'prop-types';

const User = ({ name }) => (
  <div className="singleCard__owner">
    <span className="bold">Owner: </span>
    {name}
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};

export default User;
