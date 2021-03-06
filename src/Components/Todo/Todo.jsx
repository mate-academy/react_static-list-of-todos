import PropTypes from 'prop-types';
import React from 'react';
import User from '../User';

export default function Todo({ title, user, completed }) {
  return (
    <li>
      <h2>
        {title}
      </h2>
      <p>
        {completed.toString()}
      </p>
      <User user={user} />
    </li>
  );
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
};

Todo.defaultProps = {
  user: {},
};
