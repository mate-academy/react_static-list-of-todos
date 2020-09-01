import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ preparedTodos }) => (
  <ul className="list">
    {preparedTodos.map(todo => (
      <li
        key={todo.id}
        className={todo.completed === true ? 'completed' : 'uncompleted'}
      >
        <Todo {...todo} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  preparedTodos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default TodoList;
