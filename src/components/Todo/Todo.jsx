import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';

export function Todo({ title, completed, user }) {
  return (
    <>
      <h3>{title}</h3>
      <p>
        {
          completed
            ? 'completed'
            : 'not completed'
        }
      </p>
      <User user={user} />
    </>
  );
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
