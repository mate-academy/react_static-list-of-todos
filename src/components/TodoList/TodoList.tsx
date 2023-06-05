import { TodoInfo } from '../TodoInfo';
import { User } from '../../types/User';

interface Todos {
  id: number;
  title: string;
  completed: boolean;
  user: User | null,
}

type Props = {
  todos: Todos[];
};

export const TodoList:React.FC<Props> = ({ todos = [] }) => (
  <section className="TodoList">
    {todos.map(todo => (
      <TodoInfo {...todo} key={todo.id} />
    ))}
  </section>
);
