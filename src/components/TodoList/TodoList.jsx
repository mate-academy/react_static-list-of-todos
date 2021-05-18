import React from 'react';
import PropTypes from 'prop-types';

import Todo from '../Todo/Todo';
import User from '../User/User';

import './TodoList.scss';

const TodoList = function({ preparedTodos }) {
  return (
    <ul className="TodoList">
      {preparedTodos.map(prepTodo => (
        <li className="Todo" key={prepTodo.id}>
          <Todo {...prepTodo} />
          <br />
          <User {...prepTodo.user} />
        </li>
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  preparedTodos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      user: PropTypes.object.isRequired,
    }).isRequired,
  ),
};

TodoList.defaultProps = {
  preparedTodos: [],
};

export default TodoList;
