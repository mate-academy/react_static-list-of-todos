import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type Props = {
  todosFromServer: Todo[];
};

export const TodoList: React.FC<Props> = ({ todosFromServer = [] }) => (
  <section className="TodoList">
    {todosFromServer.map((todo) => (
      <TodoInfo
        key={todo.id}
        title={todo.title}
        completed={todo.completed}
        user={todo.user}
      />
    ))}
  </section>
);
