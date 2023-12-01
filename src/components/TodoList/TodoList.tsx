import { TodoInfo } from '../TodoInfo';
import { Todo } from '../../types/Todo';
// Add the required types and props

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }: Props) => {
  return (
    <section className="TodoList">
      {todos.map(todo => {
        return (
          <TodoInfo
            key={todo.id}
            todo={todo}
          />
        );
      })}
    </section>
  );
};
