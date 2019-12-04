import React from 'react';
import PropTypes from 'prop-types';
import User from './Users';

function TodoItem(props) {
  return (
    <tbody>
      <tr>
        {/* eslint-disable-next-line react/prop-types */}
        <td>{props.todo.id}</td>
        {/* eslint-disable-next-line react/prop-types */}
        <td>{props.todo.title}</td>
        {/* eslint-disable-next-line react/prop-types */}
        <td>{props.todo.completed ? 'Done' : 'Unfulfilled'}</td>
        {/* eslint-disable-next-line react/prop-types */}
        <User person={props.todo.user} />
      </tr>
    </tbody>
  );
}

TodoItem.prototype = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool,
  user: PropTypes.string.isRequired,
};

export default TodoItem;
