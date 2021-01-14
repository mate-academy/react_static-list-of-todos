import React from 'react';
import PropTypes from 'prop-types';
import { TodoesTypes } from '../../types';
import { Todo } from '../Todo';
import './TodoList.scss';

export const TodoList = ({ todosWithUsers }) => (
  <ul className="list">
    {todosWithUsers.map(todo => <Todo {...todo} key={todo.id} />)}
  </ul>
);

TodoList.propTypes = {
  todosWithUsers: PropTypes.arrayOf(TodoesTypes).isRequired,
};
