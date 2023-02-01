import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';
import { UserInfo } from '../UserInfo';

type Props = {
  todos: Todo[],
};

export const TodoList:React.FC<Props> = ({ todos }) => {
  return (
    <>
      <section className="TodoList">
        {todos.map((todo) => (
          <article key={todo.id} className="TodoInfo TodoInfo--completed">
            <TodoInfo title={todo.title} />

            {todo.user && (
              <UserInfo user={todo.user} />
            )}
          </article>
        ))}
      </section>
    </>
  );
};
