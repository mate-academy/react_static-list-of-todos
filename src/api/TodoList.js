// import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from './Todo';
import './Styles.scss';

export const TodoList = ({ todos }) => (
  todos.map(a => Todo(a))
);

TodoList.propTypes = { todos: PropTypes.arrayOf(
  PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    user: PropTypes.string.isRequired,
  }),
) };
