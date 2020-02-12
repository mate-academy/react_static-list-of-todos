import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo/Todo';
import { User } from '../User/User';

import './TodoList.css';

export const TodoList = ({ todos, users }) => (
  <table className="todo-list">
    <thead>
      <tr>
        <th className="todo-head">#</th>
        <th className="todo-head">ToDo title</th>
        <th className="todo-head">Completed</th>
        <th className="todo-head">Person name</th>
      </tr>
    </thead>
    <tbody>
      { todos.map(todo => (
        <tr
          className={todo.completed
            ? 'todo-item todo-item--ready'
            : 'todo-item'}
          key={todo.id}
        >
          <Todo
            itemID={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
          <User
            userId={todo.userId}
            userName={users.find(user => user.id === todo.userId).name}
          />
        </tr>
      ))}
    </tbody>
  </table>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      completed: PropTypes.bool,
      id: PropTypes.number,
      userId: PropTypes.number,
      title: PropTypes.string,
    }),
  ),
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
    }),
  ),
};

TodoList.defaultProps = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      completed: PropTypes.bool,
      id: PropTypes.number,
      userId: PropTypes.number,
      title: PropTypes.string,
    }),
  ),
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
    }),
  ),
};
