import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from './Todo';
import './Styles.scss';

export const TodoList = ({ todos }) => (
  todos.map(todo => (
    <Todo
      title={todo.title}
      completed={todo.completed}
      user={todo.user}
    />
  ))
);

TodoList.propTypes = { todos: PropTypes.arrayOf(
  PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    user: PropTypes.string.isRequired,
  }),
) };
