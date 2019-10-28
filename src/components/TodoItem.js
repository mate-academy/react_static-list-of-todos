import React from 'react';
import User from './User';

function TodoItem(props) {
  const completeness = props.todo.completed;

  return (
    <tr className={completeness ? 'positive' : 'negative'}>
      <td>{props.todo.title}</td>
      <td><User name={props.todo.user} /></td>
      <td>{completeness ? 'Completed' : 'Failed'}</td>
    </tr>
  );
}

export default TodoItem;
