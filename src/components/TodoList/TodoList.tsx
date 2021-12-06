import { TodoInfo } from '../TodoInfo/TodoInfo';
import { Props } from '../../types/Props';
import './TodoList.scss';

type Prop = {
  preparedTodo: Props[],
};

export const TodoList: React.FC<Prop> = ({ preparedTodo }) => (
  <ul className="todos">
    {preparedTodo.map((todo) => (
      <li className="todos__todo todo" key={todo.id}>
        <TodoInfo
          id={todo.id}
          userId={todo.userId}
          title={todo.title}
          completed={todo.completed}
          user={todo.user}
        />
      </li>
    ))}
  </ul>
);
