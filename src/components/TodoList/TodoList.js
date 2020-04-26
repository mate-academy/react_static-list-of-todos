import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../Todo/Todo';
import './TodoList.css';

function TodoList({ todos }) {
  return (
    <div className="todo_list">
      {todos.map(todo => (
        <div className="todo_list-card" key={todo.id}>
          <Todo {...todo} />
        </div>
      ))}
    </div>
  );
}

export default TodoList;

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};
