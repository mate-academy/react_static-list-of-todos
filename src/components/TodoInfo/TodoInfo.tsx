import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type Prop = {
  todo: Todo
};

export const TodoInfo = ({ todo }: Prop) => (
  <article className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}>
    <h2 className="TodoInfo__title">
      {todo.user && (
        <>
          {todo.title}
        </>
      )}
    </h2>
    {todo.user && (
      <>
        <UserInfo user={todo.user} />
      </>
    )}
  </article>
);
