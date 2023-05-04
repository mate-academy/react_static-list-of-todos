import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

interface ListProps {
  todo: Todo;
}

export const TodoInfo: React.FC<ListProps> = ({ todo }) => {
  const {
    completed, title, user,
  } = todo;

  const className = `TodoInfo ${completed ? 'TodoInfo--completed' : ''}`;

  return (

    <article
      className={className}
    >
      <h2 className="TodoInfo__title">{title}</h2>
      {user && <UserInfo user={user} />}
    </article>
  );
};
