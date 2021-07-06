import React from 'react';
import PropTypes from 'prop-types';

import Todo from '../Todo/Todo';

const TodoList = ({ todoList }) => (
  <ol className="TodoList">
    {todoList.map(todo => (
      <li key={todo.id}>
        <Todo {...todo} />
      </li>
    ))}
  </ol>
);

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;
