import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo/Todo';
import { TodoShape } from '../../type';

export const TodoList = ({ todos }) => (
  <>
    {todos.map(todo => (
      <li className="App__list" key={todo.id}>
        <Todo {...todo} />
      </li>
    ))}
  </>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(TodoShape).isRequired,
};
