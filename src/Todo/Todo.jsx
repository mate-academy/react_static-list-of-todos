import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';

import './Todo.scss';

export const Todo = ({
  title,
  completed,
  user,
}) => (
  <>
    <span className="list__title">
      {title}
    </span>
    <span className="list__completed">
      {completed ? '✔' : '✘'}
    </span>
    <User userName={user.name} />
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
};

Todo.defaultProps = {
  user: null,
};
