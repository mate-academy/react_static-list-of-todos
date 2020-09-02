import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/index';

export const Todo = ({ user, title, completed }) => (
  <>
    <p>
      <User user={user} />
    </p>
    <p>
      {title}
    </p>
    <p>
      {(completed) ? 'completed' : 'not completed'}
    </p>
  </>
);

Todo.propTypes = {
  user: PropTypes.string.isRequired,
  completed: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
