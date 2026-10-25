// Add the required types and props
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type Props = {
  todos: Todo[];
};

export const TodoList = ({ todos }: Props) => (
  <>
    {todos.map(todo => (
      <TodoInfo todo={todo} key={todo.id} />
    ))}
  </>
);
