import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { User } from '../User';
import { TypeUser } from '../Types/TypeUser';
import './Todo.scss';

export const Todo = ({ title, completed, user }) => (
    <div className="todo">
      <div className="todo__title">
        {title}
      </div>
      <User {...user}/>
      <div className={classNames(
        'todo__status',
        {'todo__status--completed': completed === true })}
      >
        Status: {completed ? 'completed' : 'not completed'}
      </div>
    </div>
  );

  Todo.propTypes = {
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    user: TypeUser.isRequired,
  };
