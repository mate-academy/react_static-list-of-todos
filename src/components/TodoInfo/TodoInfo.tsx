import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

// Add the required types and props

type Props = {
  item: Todo
};

export const TodoInfo: React.FC<Props> = ({ item }) => {
  const {
    completed,
    title,
    user,
  } = item;

  return (
    <article className={!completed
      ? 'TodoInfo'
      : 'TodoInfo  TodoInfo--completed'}
    >
      <h2 className="TodoInfo__title">{title}</h2>
      {user && <UserInfo user={user} />}
    </article>
  );
};
