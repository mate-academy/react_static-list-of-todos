import React from 'react';
import { TodoShape } from '../Types';
import { User } from '../User';

export const Todo = ({ completed, title, user }) => {
  let statusClass = '_y';

  if (!completed) {
    statusClass = '_n';
  }

  return (
    <div className="todo-list__content">
      <p>
        {title}
      </p>
      <p>
        <span className={`todo-list__status ${statusClass}`}>
          {
            (completed)
              ? 'task is completed'
              : 'task is not completed'
          }
        </span>
        {' '}
        <User {...user} />
      </p>
    </div>
  );
};

Todo.propTypes = TodoShape.isRequired;
