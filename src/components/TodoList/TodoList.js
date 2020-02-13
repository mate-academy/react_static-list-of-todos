import React from 'react';
import './TodoList.css';
import PropTypes from 'prop-types';

import { Todo } from '../Todo/Todo';

export const TodoList = (props) => {
  const { todos } = props;

  return (
    <table className="todoTable">
      <tr>
        <th>NAME</th>
        <th>TITLE</th>
        <th>STATUS</th>
      </tr>
      {todos.map(todo => <Todo todo={todo} />)}
    </table>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf().isRequired,
};
