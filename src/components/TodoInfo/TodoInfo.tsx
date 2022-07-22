import classNames from 'classnames';

import { UserInfo } from '../UserInfo';
import { Todo } from '../../types/Todo';

// Add the required types and props

type Prop = {
  todo:Todo;
};

export const TodoInfo: React.FC<Prop> = ({ todo }) => (
  <article
    className={classNames(
      'TodoInfo',
      {
        'TodoInfo--completed': todo.completed,
      },
    )}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>
    { todo?.user && (<UserInfo user={todo.user} />)}
  </article>
);
