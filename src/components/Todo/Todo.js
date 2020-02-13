import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';

const Todo = ({ todo }) => (
  <tr>
    <td className="cell"><User todo={todo.user} /></td>
    <td className="cell">{todo.title}</td>
    <td className="cell">{`${todo.completed}`}</td>
  </tr>
);

Todo.propTypes = {
  todo: PropTypes.shape({
    user: PropTypes.string,
    title: PropTypes.string,
    completed: PropTypes.string,
  }).isRequired,
};

export default Todo;
