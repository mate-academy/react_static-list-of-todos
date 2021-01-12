import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo';
import { TaskType } from '../../types';
import './TodoList.scss';

export const TodoList = ({ content }) => (
  <table className="table">
    <thead>
      <tr className="table__header">
        <th className="table__header-task">Todo</th>
        <th className="table__header-status">Status</th>
        <th className="table__header-user">User</th>
      </tr>
    </thead>
    <tbody>
      {content.map(todo => (
        <tr key={todo.id} className="table__row">
          <Todo
            task={todo}
          />
        </tr>
      ))}
    </tbody>
  </table>
);

TodoList.defaultProps = {
  content: [],
};

TodoList.propTypes = {
  content: PropTypes.arrayOf(TaskType),
};
