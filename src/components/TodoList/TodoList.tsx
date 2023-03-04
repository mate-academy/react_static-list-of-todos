import { TodoInfo } from '../TodoInfo';
import { Todo } from '../../types/Todo';

type TodosProp = {
  todos: Todo[];
};

export const TodoList: React.FC<TodosProp> = ({ todos }) => {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <TodoInfo todo={todo} />
        </li>
      ))}
    </ul>
  );
};
