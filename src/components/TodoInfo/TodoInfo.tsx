/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
import { UserInfo } from '../UserInfo/UserInfo';
import { Todo } from '../../types/Todo';

interface TodoInfoProp {
  todo: Todo
}

export const TodoInfo: React.FC<TodoInfoProp> = ({ todo }) => (
  <article className={todo.completed ? 'TodoInfo TodoInfo--completed' : 'TodoInfo'}>
    <h2 className="TodoInfo__title">{todo.title}</h2>

    <UserInfo user={todo.user!} />
  </article>
);
