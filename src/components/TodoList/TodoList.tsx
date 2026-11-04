// Add the required types and props
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

export const TodoList = (props: { todos: Todo[] }) => (
  <>
    {props.todos.map(todo => (
      <TodoInfo todo={todo} key={todo.id} />
    ))}
  </>
);
