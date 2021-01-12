import React from 'react';
import PropTypes from 'prop-types';
import TypeTodo from '../../types';
import Todo from '../Todo/Todo';

function TodoList({ todoList }) {
  return (
    <ul className="TodoList">
      {todoList.map(task => (
        <Todo {...task} key={task.id} />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    TypeTodo,
  ).isRequired,
};

TodoList.propTypes = PropTypes.arrayOf(
  TypeTodo.isRequired,
).isRequired;

export default TodoList;
