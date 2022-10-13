import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

interface Prop {
  todo: Todo;
}

export const TodoInfo : React.FC<Prop> = ({ todo }) => (
  <article className={`TodoInfo ${todo.completed && 'TodoInfo--completed'}`}>
    <h2 className="TodoInfo__title">{todo.title}</h2>

    <UserInfo user={todo.user} />

  </article>
);
