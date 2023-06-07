import { TodoInfo } from '../TodoInfo';
import { Todo } from '../../types/Todo';

type Props = {
  todos: Todo[];
};

export const TodoList:React.FC<Props> = ({ todos = [] }) => (
  <section className="TodoList">
    {todos.map(todo => (
      <TodoInfo
        id={todo.userId}
        title={todo.title}
        completed={todo.completed}
        user={todo.user}
        key={todo.id}
      />
    ))}
  </section>
);
