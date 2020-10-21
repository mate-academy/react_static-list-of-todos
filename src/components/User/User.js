import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';
import classNames from 'classnames';

export const User = ({ user }) => (
  <>
    <strong className={
      classNames('userName',
        { userName__done: user.completed })}
    >
      {user.name}
    </strong>
  </>
);

User.propTypes = {
  user: PropTypes.objectOf({
    completed: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
