import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type TodoType = {
  todos: Todo[];
};

export const TodoList: React.FC<TodoType> = ({ todos }) => (
  <section className="TodoList">
    {todos.map(task => <TodoInfo key={task.id} todo={task} />)}
  </section>
);
