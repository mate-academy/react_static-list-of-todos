import React from 'react';
import './User.css';
import PropTypes from 'prop-types';

const User = ({ userPersonalInfo: { name } }) => (
  <>
    <h3 className="names">
      <p className="article">Name: </p>
      {name}
    </h3>
  </>
);

User.propTypes = {
  userPersonalInfo: PropTypes.objectOf(PropTypes.shape({
    name: PropTypes.number.isRequired,
  })).isRequired,
};

export default User;
