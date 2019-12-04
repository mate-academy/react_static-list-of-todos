import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({ items }) => (
  <ul>
    { items.map(todo => (<TodoItem item={todo} key={todo.id} />)) }
  </ul>
);

TodoList.propTypes = { items: PropTypes.arrayOf(PropTypes.object).isRequired };

export default TodoList;
