import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.scss';
import { Todo } from '../Todo/Todo';

export const TodoList = ({ todos }) => (

  <ol className="todoList">
    {todos.map(element => (
      <li className="todoList__todo" key={element.id}>
        <Todo {...element} />
      </li>
    )) }
  </ol>

);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};
