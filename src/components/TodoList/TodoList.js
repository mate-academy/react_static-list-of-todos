import React from 'react';
import PropTypes from 'prop-types';
import { TodoesTypes } from '../../types';
import { Todo } from '../Todo';
import './TodoList.scss';

export const TodoList = ({ todos }) => (
  <ul className="list">
    {todos.map(todo => <Todo {...todo} key={todo.id} />)}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(TodoesTypes).isRequired,
};
