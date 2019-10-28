import React from 'react';
import PropTypes from 'prop-types';
import User from '../user/User';

function TodoItem(props) {
  const done = props.todo.completed;

  return (
    <tr>
      <td>{props.todo.title}</td>
      <td><User name={props.todo.user} /></td>
      <td className={done ? 'positive' : 'warning'}>
        {done ? 'Виконано' : 'Забито'}
      </td>
    </tr>
  );
}

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  todo: PropTypes.isRequired,
};

export default TodoItem;
