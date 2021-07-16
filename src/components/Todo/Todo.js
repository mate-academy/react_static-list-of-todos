import React from 'react';
import classNames from 'classnames';
import { User } from '../User';
import { PreparedTodosType } from '../../types/PreparedTodosType';

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
      {'Status is:'}
      {' '}
      <span className={classNames(
        'todos-list__complete', {
          iscompleted: completed,
          uncompleted: !completed,
        },
      )}
      >
        {completed ? 'completed' : 'not completed'}
      </span>
    </p>
    <User user={user} />
  </>
);

Todo.propTypes = PreparedTodosType.isRequired;
