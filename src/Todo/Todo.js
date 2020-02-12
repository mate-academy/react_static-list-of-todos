import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';

const Todo = ({ todoObj }) => (
  <tr>
    <User userObj={todoObj.user} />
    <td>{todoObj.title}</td>
    <td>{todoObj.completed ? 'Done' : '---'}</td>
  </tr>
);

Todo.propTypes = {
  todoObj: PropTypes.shape({
    user: PropTypes.shape.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Todo;
