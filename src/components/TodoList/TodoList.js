import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../Todo/Todo';

const TodoList = ({ todosList }) => (
  todosList.map(item => <Todo key={item.id} todo={item} />)
);

TodoList.propTypes = {
  todosList: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};
export default TodoList;
