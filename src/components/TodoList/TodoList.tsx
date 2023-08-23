import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type Props = {
  todos: Todo[];
};

export const TodoList = ({ todos }: Props) => {
  const todoInfo = todos.map((todo) => {
    return <TodoInfo todo={todo} key={todo.id} />;
  });

  return (
    <section className="TodoList">
      {todoInfo}
    </section>
  );
};
