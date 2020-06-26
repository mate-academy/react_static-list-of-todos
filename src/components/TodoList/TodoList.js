import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../Todo/Todo';
import './TodoList.css';
import { FullShape } from '../Shapes/FullShape';

const TodoList = ({ preparedTodos }) => (
  <ul className="list">
    {preparedTodos.map(preparedTodo => (
      <Todo {...preparedTodo} key={preparedTodo.id} />
    ))}
  </ul>
);

TodoList.propTypes = {
  preparedTodos: PropTypes.arrayOf(FullShape).isRequired,
};

export default TodoList;
