import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

const TodoItem = ({ todo }) => (
  <tr>
    <td>{todo.id}</td>
    <td>{todo.title}</td>
    <td><User userData={todo.user} /></td>
    <td>{todo.completed ? 'Done' : 'In progress'}</td>
  </tr>
);

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    user: PropTypes.object,
    completed: PropTypes.string,
  }).isRequired,
};

export default TodoItem;
