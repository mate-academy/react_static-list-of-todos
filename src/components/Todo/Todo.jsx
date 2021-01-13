import React from 'react';
import { typesValidation } from '../../typesValidation';
import { User } from '../User';
import './todo.scss';

export const Todo = ({
  user,
  title,
  completed,
}) => (
  <>
    <User {...user} />
    <div className="taskDescription">
      -
      {' '}
      {title}
    </div>
    <div className={completed ? 'stateDone' : 'stateExecution'}>
      {completed ? 'done' : 'to do'}
    </div>
  </>
);

Todo.propTypes = typesValidation;
