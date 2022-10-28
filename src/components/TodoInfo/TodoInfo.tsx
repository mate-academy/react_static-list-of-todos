// Add the required types and props
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

interface Props {
  todo: Todo;
}

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const {
    title,
    completed,
    user,
    userId,
  } = todo;

  return (
    <article className={
      completed
        ? 'TodoInfo TodoInfo--completed'
        : 'TodoInfo'
    }
    >
      <h2 className="TodoInfo__title">{title}</h2>

      <UserInfo user={user} key={userId} />
    </article>
  );
};
