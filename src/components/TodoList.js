import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import { TodoShape } from './TodoShape';

const TodoList = ({ preparedTodos }) => (
  <ul className="list">
    {preparedTodos.map(item => <Todo todo={item} />)}
  </ul>
);

TodoList.propTypes = {
  preparedTodos: PropTypes.arrayOf(TodoShape).isRequired,
};

export default TodoList;
