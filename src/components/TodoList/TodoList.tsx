import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => {
  const todosList = todos.map(todo => (
    <TodoInfo
      key={todo.id}
      todo={todo}
    />
  ));

  return (
    <section className="TodoList">
      {todosList}
    </section>
  );
};
