import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';
import './Todo.scss';

export const Todo = ({ title, completed, user }) => (
  <>
    <User {...user} />
    <p className="todoTitle">{title}</p>
    <span className="todoStatus">
      {`${completed ? 'complited' : 'not complited'}`}
    </span>
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
