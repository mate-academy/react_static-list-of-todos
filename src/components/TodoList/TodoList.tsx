// Add the required types and props
import { TodoInfo } from '../TodoInfo';
import { Todo } from '../../types/Todo';

export const TodoList: React.FC<{ todos: Todo[] }> = ({ todos }) => {
  return (
    <>
      {todos.map((todo: Todo) => (
        <TodoInfo key={todo.id} todo={todo} />
      ))}
    </>
  );
};
