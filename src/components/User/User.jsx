import React from 'react';
import './User.scss';
import PropTypes from 'prop-types';

const User = ({name}) => (
  <span className={'user-card__name'}>
    {name}
  </span>
)

User.propTypes = {
  name: PropTypes.string.isRequired,
}

export default User;
