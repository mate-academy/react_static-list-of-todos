import { TodoFull } from '../../types/types';
import { TodoInfo } from '../TodoInfo/TodoInfo';

type Props = {
  todos: TodoFull[]
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <li key={todo.id}>
        <TodoInfo todo={todo} />
      </li>
    ))}
  </ul>
);
