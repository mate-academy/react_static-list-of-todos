import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

interface TodoInfoType {
  todoInfo: Todo;
}

export const TodoInfo: React.FC<TodoInfoType> = ({ todoInfo }) => {
  const {
    title,
    user,
  } = todoInfo;

  if (!user) {
    throw new Error('Cant find user');
  }

  return (
    <article className="TodoInfo TodoInfo--completed">
      <h2 className="TodoInfo__title">{title}</h2>

      <UserInfo user={user} />
    </article>
  );
};
