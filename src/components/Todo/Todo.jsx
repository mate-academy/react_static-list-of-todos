import React from 'react';
import './todo.scss';
import PropTypes from 'prop-types';
import { User } from '../User';

export const Todo = ({ user, title, completed }) => (
  <div className={completed ? 'box completed' : 'box noCompleted'}>
    <User {...user} />
    {title}
    <p className={completed ? 'litleBox yes' : 'litleBox no'}>
      {completed ? 'YES !!!' : 'NO !!!'}
    </p>
  </div>
);

Todo.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};
