import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo/Todo';
import './TodoList.css';

const TodoList = ({ preparedTodos }) => (
  <ul className="todos">
    {
      preparedTodos.map(todo => <Todo key={todo.id} {...todo} />)
    }
  </ul>
);

export { TodoList };

TodoList.propTypes = {
  preparedTodos: PropTypes.arrayOf(PropTypes.object).isRequired,
};
