import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../Todo/Todo';
import './TodoList.scss';

function TodoList({ todos }) {
  return (
    <ul className="list">
      {
        (todos.map(
          todo => <li key={todo.id}><Todo todoItem={todo} /></li>,
        ))
      }
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default TodoList;
