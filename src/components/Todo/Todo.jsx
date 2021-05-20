import React from 'react';
import { User } from '../User';
import PropTypes from 'prop-types';
import { TypeUser } from '../Types/TypeUser';
import './Todo.scss';

export const Todo = ({ title, completed, user }) => (
    <div className="todo-item">
      <div className="todo-title">
        {title}
      </div>
      <div className="todo-status">
        Status: {completed ? 'completed' : 'not completed'}
      </div>
      <User user={user}/>
    </div>
  );

  Todo.propTypes = {
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    user: TypeUser.isRequired,
  };
