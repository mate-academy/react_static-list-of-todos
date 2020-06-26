import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo/Todo';
import './TodoList.css';

export function TodoList(props) {
  const { todolist } = props;

  return (
    <>
      <h1>Static list of todos</h1>
      <span>Todos: </span>
      {todolist.length}
      <ul className="tasks">
        {todolist.map(todo => (
          <Todo todo={todo} />
        ))}
      </ul>
    </>
  );
}

TodoList.propTypes = {
  todolist: PropTypes.arrayOf(
    PropTypes.shape({
      user: PropTypes.shape({
        name: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
      }).isRequired,
      userId: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
