import React from 'react';
import classNames from 'classnames';
import { UserInfo } from '../UserInfo/UserInfo';
import { Todo } from '../../types/Todo';

type Prop = {
  todo: Todo;
};

// Add the required types and props
export const TodoInfo: React.FC<Prop> = ({ todo }) => (
  <>
    <article className={
      classNames('TodoInfo', {
        'TodoInfo--completed': todo.completed,
      })
    }
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>

      {todo.user && (
        <UserInfo user={todo.user} />
      )}
    </article>
  </>
);
