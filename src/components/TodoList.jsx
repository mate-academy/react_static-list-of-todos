import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from './Todo/Todo';
import { TodoType } from './Types';

export const TodoList = ({ todosForList }) => (
  <ul>
    {todosForList.map(todo => (
      <li key={todo.id}>
        <Todo {...todo} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  todosForList: PropTypes.arrayOf(
    PropTypes.shape(
      TodoType,
    ),
  ).isRequired,
};
