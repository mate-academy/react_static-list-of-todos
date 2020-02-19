import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todosList }) => (
  todosList.map(todo => <Todo key={todo.id} currentTodo={todo} />)
);

TodoList.propTypes = {
  todosList: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default TodoList;
