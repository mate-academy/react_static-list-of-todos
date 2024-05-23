import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

export const TodoList: React.FC<{ todos: Todo[] }> = ({ todos }) => (
  <>
    {todos.map((todo: Todo) => (
      <TodoInfo todos={todo} key={todo.id} />
    ))}
    ;
  </>
);
