import PropTypes from 'prop-types';
import React from 'react';
import './User.scss';

export default function User({ user }) {
  return (
    <>
      <h3 className="app__name">{user.name}</h3>
    </>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
};

User.defaultProps = {
  user: {},
};
