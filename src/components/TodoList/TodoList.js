import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

function TodoList({ todos }) {
  // console.log(todos);

  return (
    <>
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;
