import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

interface Prop {
  todo: Todo;
}

export const TodoInfo : React.FC<Prop> = ({ todo }) => {
  const {
    title,
    user,
    completed,
  } = todo;

  return (
    <article className={`TodoInfo ${completed && 'TodoInfo--completed'}`}>
      <h2 className="TodoInfo__title">{title}</h2>

      <UserInfo user={user} />

    </article>
  );
};
