import React from 'react';
import './TodoList.css';
import PropTypes from 'prop-types';

import { Todo } from '../Todo/Todo';

export const TodoList = (props) => {
  const { todos } = props;

  return (
    <table className="todoTable">
      <tr>
        <th>Name</th>
        <th>Title</th>
        <th>Status</th>
      </tr>
      {todos.map(todo => <Todo key={todo.id} todo={todo} />)}
    </table>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf().isRequired,
};
