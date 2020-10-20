import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo';
import { TodoShape } from '../../shapes/TodoShape';

export const TodoList = ({ todos }) => (
  <div className="list list-group">
    {todos.map(todoItem => (
      <Todo {...todoItem} key={todoItem.id} />
    ))}
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(TodoShape).isRequired,
};
