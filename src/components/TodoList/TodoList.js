import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

function TodoList(props) {
  return (
    <>
      <p>
        <span className="todo-title">Todos: </span>
      </p>
      <div className="todo-list">
        {props.todos.map(todo => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </div>
    </>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default TodoList;
