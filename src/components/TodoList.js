import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-named-as-default
import Todo from './Todo';

export function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {/* {console.log(todo, todo.id)} */}
          <Todo {...todo} />
        </li>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

TodoList.defaultProps = {
  todos: [],
};

export default TodoList;
