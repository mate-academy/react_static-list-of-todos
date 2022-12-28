import cn from 'classnames';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

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
    <h2 className="TodoInfo__title">
      {`${element.title}`}
    </h2>

    {element.user && (
      <UserInfo
        user={element.user}
      />
    )}
  </article>
);
