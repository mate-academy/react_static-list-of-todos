import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';
import './Todo.scss';

export const Todo = ({ title, completed, user }) => (
  <>
    <User {...user} />
    <p className="todos-input__title">
      Task
      {': '}
      {title}
    </p>
    <p>
      Status:
      {' '}
      {completed ? 'Done!' : 'In process...'}
    </p>
  </>

);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};
