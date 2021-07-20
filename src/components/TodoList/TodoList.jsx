import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo';
import { TodoShape } from '../../shapes';

export const TodoList = ({ todos }) => (
  <div>
    {todos.map(todo => (
      <span key={todo.id}>
        <Todo todoGroup={todo} />
      </span>
    ))}
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(TodoShape).isRequired,
};
