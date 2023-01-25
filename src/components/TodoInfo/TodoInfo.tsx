import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';
import './TodoInfo.scss';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = (
  { todo: { title, completed, user } },
) => (
  <article className={`TodoInfo ${
    completed ? 'TodoInfo--completed' : ''
  }`}
  >
    <h2 className="TodoInfo__title">{title}</h2>
    {user && <UserInfo user={user} />}
  </article>
);
