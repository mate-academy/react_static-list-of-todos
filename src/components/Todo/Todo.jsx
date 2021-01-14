import React from 'react';
import { User } from '../User';
import { TodoType } from '../Types';
import './Todo.scss';

export const Todo = ({ title, completed, user }) => (
  <>
    <strong>
      {`TODO: ${title}`}
    </strong>
    <p>
      Status:
      <span
        className={completed
          ? 'todo--green'
          : 'todo--red'
        }
      >
        {completed ? ' finished' : ' unfinished'}
      </span>
    </p>
    <User {...user} />
  </>
);

Todo.propTypes = TodoType;
