import { Todo } from '../types/interfaces';
import { TodoInfo } from './TodoInfo';

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="TodoList">
    {todos.map((todo:Todo) => (
      <TodoInfo
        key={todo.id}
        title={todo.title}
        completed={todo.completed}
        user={todo.user}
      />
    ))}
  </ul>
);

type Props = {
  todos: Todo[],
};
