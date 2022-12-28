// Add the required types and props

import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type Todos = {
  element: Todo;
};

export const TodoInfo: React.FC<Todos> = ({ element }) => (
  <article className="TodoInfo TodoInfo--completed">
    <h2 className="TodoInfo__title">{`${element.title}`}</h2>
    {element.user && (
      <UserInfo
        key={element.id}
        user={element.user}
      />
    )}
  </article>
);
