import React from 'react';
import classNames from 'classnames';
import { User } from '../User';
import { TodoType } from '../../types';
import './Todo.scss';

export const Todo = ({ user, title, completed }) => (
  <>
    <User {...user} />
    <div className="todo">
      <p className="todo__title">
        {title}
      </p>
      <p className={classNames(
        'todo__state', {
          'todo__state--done': completed,
        },
      )}
      >
        {completed === true ? 'Done' : 'Not done'}
      </p>
    </div>
  </>
);

Todo.propTypes = TodoType.isRequired;
