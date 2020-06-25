import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';
import './Todo.css';

export const Todo = ({ title, completed, user }) => (
  <>
    <span className="todo-list__key">Name</span>
    :&nbsp;
    <span style={{ 'font-style': 'italic' }}>{title}</span>
    <br />
    <span className="todo-list__key">Status</span>
    :&nbsp;
    {(
      completed
        ? (<span style={{ color: 'green' }}>completed</span>)
        : (<span style={{ color: 'red' }}>not completed</span>)
    )}
    <br />
    <span className="todo-list__key">User</span>
    :&nbsp;
    <User {...user} />
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.objectOf(PropTypes.any).isRequired,
};
