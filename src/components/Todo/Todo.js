import React from 'react';
import PropTypes from 'prop-types';
import './Todo.css';
import { User } from '../User/User';

export const Todo = ({ todoInfo }) => {
  const { id, title, completed, user } = todoInfo;

  return (
    <tr className="todo-list__item">
      <td className="todo-list__item-info">{id}</td>
      <User user={user} />
      <td className="todo-list__item-info">{title}</td>
      <td className="todo-list__item-info">{(completed) ? '🟢' : '❌' }</td>
    </tr>
  );
};

Todo.propTypes = {
  todoInfo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    user: PropTypes.object,
  }).isRequired,
};
