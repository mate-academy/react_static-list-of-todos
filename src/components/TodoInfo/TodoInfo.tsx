import classNames from 'classnames';
import { Todo } from '../../types/Todo';

import { UserInfo } from '../UserInfo';

type ToDoInf = {
  todo: Todo;
};

export const TodoInfo: React.FC<ToDoInf> = ({
  todo: {
    title,
    completed,
    user,
  },
}) => (
  <>
    <article className={
      classNames('TodoInfo', { 'TodoInfo--completed': completed })
    }
    >
      <h2 className="TodoInfo__title">{title}</h2>
      {user && (
        <UserInfo user={user} />
      )}
    </article>
  </>
);
