import { TodoInfo } from '../TodoInfo';
import { Todo } from '../../types/Todo';

export const TodoList = ({ todos }: Props) => {
  return (
    <section>
      {todos.map(todo => (
        <TodoInfo todo={todo} />
      ))}
    </section>
  );
};

type Props = {
  todos: Todo[];
};
