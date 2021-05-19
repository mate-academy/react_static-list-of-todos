import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo/Todo';

export const TodoList = ({ todos }) => (
  <>
    {todos.map(todo => (
      <div key={todo.id}>
        <Todo {...todo} />
      </div>
    ))}
  </>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
