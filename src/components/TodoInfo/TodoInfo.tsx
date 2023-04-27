import { UserInfo } from '../UserInfo';
import { Todo } from '../../types/Todo';

interface TodoInfoProps {
  todo: Todo;
}

export const TodoInfo:React.FC<TodoInfoProps> = ({ todo }) => {
  const { completed, title, user } = todo;

  const className = `TodoInfo ${completed ? 'TodoInfo--completed' : ''}`;

  return (
    <article className={className}>
      <h2 className="TodoInfo__title">{title}</h2>
      { user && <UserInfo user={user} /> }
    </article>
  );
};
