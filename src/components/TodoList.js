import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import './styles/TodoList.css';

const TodoList = ({ preparedTodos }) => (
  <div className="list">
    {preparedTodos.map(preparedTodo => (
      <Todo {...preparedTodo} key={preparedTodo.id} />
    ))}
  </div>
);

TodoList.propTypes = {
  preparedTodos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;
