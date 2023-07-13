// Add the required types and props
import './TodoInfo.scss';
import { UserInfo } from '../UserInfo';
import { Todo } from '../../types/Todo';

export const TodoInfo = ({ todo }: { todo: Todo }) => (
  <>
    <article
      className={todo.completed === true
        ? ('TodoInfo TodoInfo--completed')
        : ('TodoInfo')}
      key={todo.id}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>

      {todo.user && (
        <UserInfo user={todo.user} />
      )}
    </article>
  </>
);
