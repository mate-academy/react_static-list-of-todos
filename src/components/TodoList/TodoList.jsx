import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo';

export const TodoList = ({ todos }) => (

  <ul className="list">
    {todos.map(todo => (
      <React.Fragment key={todo.id}>
        <Todo
          title={todo.title}
          completed={todo.completed}
          user={todo.user.name}
        />
      </React.Fragment>
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf().isRequired,
};
