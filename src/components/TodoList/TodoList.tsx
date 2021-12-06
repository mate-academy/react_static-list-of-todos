import { TodoInfo } from '../TodoInfo/TodoInfo';
import { TodoWithUser } from '../../types/TodoWithUser';
import './TodoList.scss';

type Prop = {
  preparedTodo: TodoWithUser[],
};

export const TodoList: React.FC<Prop> = ({ preparedTodo }) => (
  <ul className="todos">
    {preparedTodo.map((todo) => (
      <li className="todos__todo todo" key={todo.id}>
        <TodoInfo {...todo} />
      </li>
    ))}
  </ul>
);
