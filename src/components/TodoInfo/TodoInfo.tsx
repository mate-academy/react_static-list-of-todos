import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';
import './TodoInfo.scss';

type Props = {
  todo: Todo
};

export const TodoInfo = ({ todo }: Props) => {
  const className = `TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`;

  return (
    <article className={className}>
      <h2 className="TodoInfo__title">{todo.title}</h2>
      {todo.user
      && <UserInfo user={todo.user} key={todo.userId} />}
    </article>
  );
};
