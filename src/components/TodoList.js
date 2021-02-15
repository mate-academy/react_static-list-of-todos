import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from './Todo';

export const TodoList = ({ todos }) => (
  <>
    {todos.map(todo => (
      <tr>
        <th>
          <ol key={todo.id}>
            <Todo {...todo} />
          </ol>
        </th>
      </tr>
    ))}
  </>
);

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
