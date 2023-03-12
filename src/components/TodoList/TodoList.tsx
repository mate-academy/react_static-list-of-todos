import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type Props = {
  allTodos: Todo[],
};

export const TodoList: React.FC<Props> = ({ allTodos = [] }) => (
  <section className="TodoList">
    {allTodos.map(item => (
      <TodoInfo todo={item} key={item.id} />
    ))}
  </section>
);
