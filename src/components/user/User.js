import React from 'react';
import PropTypes from 'prop-types';
import './user.css';

const User = ({ name }) => (
  <>
    <h3 className="zeroMarg">
      {name}
    </h3>
  </>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};
export default User;
