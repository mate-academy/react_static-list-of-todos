import React from 'react';
import { PropTypes } from 'prop-types';
import { Todo } from './Todo';
import { TodoShape } from '../shapes/TodoShape';

export const TodoList = ({ todos }) => (
  <div>
    {
      todos.map(todo => (
        <Todo {...todo} key={todo.id} />
      ))
    }
  </div>
);

TodoList.propTypes = PropTypes.arrayOf(TodoShape).isRequired;
export default TodoList;
