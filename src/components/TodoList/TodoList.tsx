import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type Props = {
  todosServer: Todo[];
};

export const TodoList: React.FC<Props> = ({ todosServer = [] }) => (
  <section className="TodoList">
    {todosServer.map((todo) => (
      <TodoInfo {...todo} key={todo.id} />
    ))}
  </section>
);
