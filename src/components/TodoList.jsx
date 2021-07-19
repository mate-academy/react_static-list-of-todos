import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from './Todo';

export const TodoList = ({ todos }) => (
  <>
    <ol>
      {todos.map(item => (
        <li key={item.id}>
          <Todo {...item} />
        </li>
      ))}
    </ol>
  </>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
