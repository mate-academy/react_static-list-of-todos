import cn from 'classnames';
import { UserInfo } from '../UserInfo';
import { Todo } from '../../types/Todo';

type Todos = {
  element: Todo;
};

export const TodoInfo: React.FC<Todos> = ({ element }) => (
  <article
    className={cn(
      'TodoInfo',
      {
        'TodoInfo--completed': element.completed,
      },
    )}
  >
    <h2 className="TodoInfo__title">{`${element.title}`}</h2>
    {element.user && (
      <UserInfo
        key={element.id}
        user={element.user}
      />
    )}
  </article>
);
