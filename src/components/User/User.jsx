import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

const User = props => (
  <div className="userName">
    {props.user.name}
  </div>
);

User.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
