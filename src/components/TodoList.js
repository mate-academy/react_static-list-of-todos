import React from 'react';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';

function TodoList(props) {
  return (
    <ul>
      {props.todos.map(todo => (
        <TodoItem todo={todo} />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;
