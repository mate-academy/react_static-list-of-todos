import React from 'react';
import PropTypes from 'prop-types';
import { TodoType } from '../Types/type';
import { User } from '../User/User';
import './Todo.scss';

export const Todo = ({ title, completed, user }) => {
  return (
    <div className="todo__info">
      <div className="todo__title">
        {title}
      </div>
      <div className="todo__status status">
        {completed
          ? <p className="status__todo done">completed</p>
          : <p className="status__todo not">not-completed</p>}
      </div>
      <div className="todo__name">
        <User user={user} />
      </div>
    </div>
  );
};

Todo.propTypes = TodoType;
