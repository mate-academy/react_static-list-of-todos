import React from 'react';
import './TodoList.css';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem/TodoItem';

function TodoList({ todos }) {
  return (
    <div className="todo-list">
      {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      userId: PropTypes.number,
      title: PropTypes.string,
      completed: PropTypes.bool,
    })
  ).isRequired,
};

export default TodoList;
