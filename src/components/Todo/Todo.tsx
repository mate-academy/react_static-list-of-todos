import React from 'react';
import classNames from 'classnames';
import './Todo.scss';
import { TodoTypes } from '../types/TodoTypes';

type Props = {
  todo: TodoTypes;
};

export const Todo: React.FC<Props> = ({ todo }) => {
  const status = todo.completed ? 'Completed' : 'Still in progress';

  return (
    <>
      <div className="container">
        <div className={classNames('status', {
          status__complete: todo.completed,
        })}
        >
          <div className="context">
            <div className="title">
              {todo.title}
            </div>
            <div className="status-style">
              {'Status - '}
              <em>{status}</em>
            </div>
            <div className="content">
              <div>
                {'Performer: '}
                <strong>{todo.user?.name}</strong>
              </div>
              <div>
                {'Contact to performer: '}
                {todo.user?.email}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
