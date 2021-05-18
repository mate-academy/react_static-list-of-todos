import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo';
import users from '../../api/users';

export const TodoList = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <li key={todo.id}>
        <Todo
          title={todo.title}
          completed={todo.completed}
          user={users.find(user => user.id === todo.userId)}
        />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(),
};

TodoList.defaultProps = {
  todos: [],
};
