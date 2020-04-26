import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../Todo/Todo';
import './TodoList.css';

function TodoList({ todos }) {
  return (
    <div className="list">
      {todos.map(todo => (
        <div className="list__item" key={todo.id}>
          <Todo {...todo} />
        </div>
      ))}
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;
