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
      <ul className="todo-list__items">
        {props.todos.map(todo => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ul>
    </>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default TodoList;
