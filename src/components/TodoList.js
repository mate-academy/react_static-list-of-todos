import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from './Todo';

export const TodoList = ({ preparedTodos }) => (
  <>
    {preparedTodos.map(todo => (
      <div key={todo.id}>
        <Todo
          title={todo.title}
          completed={todo.completed}
          user={todo.user}
        />
      </div>
    ))}
  </>
);

TodoList.propTypes = {
  preparedTodos: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ),
};

TodoList.defaultProps = {
  preparedTodos: [],
};
