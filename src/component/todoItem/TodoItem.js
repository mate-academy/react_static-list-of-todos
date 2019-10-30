import React from 'react';
import PropTypes from 'prop-types';
import User from '../user/User';

function TodoItem({ todo }) {
  const done = todo.completed;

  return (
    <tr>
      <td>{todo.title}</td>
      <td><User name={todo.user} /></td>
      <td className={done ? 'positive' : 'warning'}>
        {done ? 'Виконано' : 'Забито'}
      </td>
    </tr>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.isRequired,
};

export default TodoItem;
