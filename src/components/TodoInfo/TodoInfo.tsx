import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type Props = {
  todo: Todo;
};

export const TodoInfo : React.FC<Props> = ({
  todo: {
    completed,
    title,
    user,
  },
}) => (
  <article className={`TodoInfo ${completed ? 'TodoInfo--completed' : ''}`}>
    <h2 className="TodoInfo__title">{title}</h2>

    <UserInfo user={user} />
  </article>
);
