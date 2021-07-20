import React from 'react';
import cn from 'classnames';
import { User } from '../User';
import { PreparedTodos } from '../../types/PreparedTodos';

export const Todo = ({
  title,
  completed,
  user,
}) => (
  <>
    <h3 className="todos-list__title">
      {title}
    </h3>
    <p className="todos-list__status">
      {'Status is: '}
      <span className={cn('todos-list__complete',
        {
          iscompleted: completed,
          uncompleted: !completed,
        })
      }
      >
        {completed ? 'completed' : 'not completed'}
      </span>
    </p>
    <User user={user} />
  </>
);

Todo.propTypes = PreparedTodos.isRequired;
