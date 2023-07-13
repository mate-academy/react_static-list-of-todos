// Add the required types and props
import { TodoInfo } from '../TodoInfo';
import { Todo } from '../../types/Todo';

export const TodoList = ({ todos }: { todos: Todo[] }) => (
  <>
    {todos.map(todo => (
      <TodoInfo todo={todo} key={todo.id} />
    ))}
  </>
);
