import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

function TodoList({ todos }) {
  return (
    <ul className="todoList">
      {todos.map(todo => (
        <li className="todoInfo" key={todo.id}>
          <Todo {...todo} />
        </li>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default TodoList;
