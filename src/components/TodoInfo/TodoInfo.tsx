import { Todo } from '../../types/Todo';
// import { User } from '../../types/User';
import { UserInfo } from '../UserInfo';

type Props = {
  todo: Todo,
};

export const TodoInfo: React.FC<Props> = ({
  todo: {
    user,
    title,
    completed,
  },
}) => (
  <article className={completed
    ? 'TodoInfo--completed TodoInfo'
    : 'TodoInfo'}
  >
    <h2 className="TodoInfo__title">{title}</h2>

    <UserInfo user={user} />
  </article>
);
