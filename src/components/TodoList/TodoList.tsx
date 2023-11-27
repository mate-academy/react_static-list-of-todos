import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type Prop = {
  todos: Todo[]
};

export const TodoList = ({ todos }: Prop) => (
  <>
    {todos.map((todo) => (
      <TodoInfo
        todo={todo}
        key={todo.id}
      />
    ))}
  </>
);
