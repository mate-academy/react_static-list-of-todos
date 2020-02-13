import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo/Todo';
import { User } from '../User/User';

import './TodoList.css';

export const TodoList = ({ todos, users }) => {
  const todosList = todos
    .map(todo => ({
      ...todo,
      user: users
        .find(({ id }) => id === todo.userId),
    }));

  return (
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
        {todosList.map(({ completed, id, title, userId, user }) => (
          <tr
            className={completed
              ? 'todo-item todo-item--ready'
              : 'todo-item'}
            key={id}
          >
            <Todo
              itemID={id}
              title={title}
              completed={completed}
            />
            <User
              userId={userId}
              userName={user.name}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

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
      completed: false,
      id: 0,
      userId: 0,
      title: '',
    }),
  ),
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: '',
      id: 0,
    }),
  ),
};
