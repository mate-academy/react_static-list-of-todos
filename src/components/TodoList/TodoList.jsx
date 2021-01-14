import React from 'react';
import PropTypes from 'prop-types';
import { TodoType } from '../propTypes/TodoType';
import { Todo } from '../Todo';
import './TodoList.scss';

export const TodoList = ({ todos }) => (
  <div className="list">
    <header className="list__header">
      <div className="list__title">User</div>
      <div className="list__title">Task</div>
      <div className="list__title">status</div>
    </header>
    {
      todos.map(todo => (
        <Todo {...todo} key={todo.id} />))
    }
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(TodoType).isRequired,
};
