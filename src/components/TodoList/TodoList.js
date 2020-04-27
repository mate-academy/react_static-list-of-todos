import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../Todo/Todo';

const TodoList = ({ todoList }) => (
  <ul className="todo__list">
    {todoList.map(todo => (
      <Todo key={todo.id} {...todo} />
    ))}
  </ul>
);

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;
