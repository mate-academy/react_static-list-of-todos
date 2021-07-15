import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/';

export const Todo = ({
  user,
  title,
  completed,
}) => (
  <>
    <h3>
      {title}
    </h3>
    <p>
      Completed: {completed ? 'yes' : 'no'}.
    </p>
    <User currentUser={user.name} />
  </>
);

Todo.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};
