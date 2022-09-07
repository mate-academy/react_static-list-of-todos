import { TodoInfo } from '../TodoInfo';
import { Todo } from '../../types/Todo';

type Props = {
  Todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ Todos }) => (
  <section className="TodoList">
    {
      Todos.map((todoItem) => (
        <TodoInfo todoFromServ={todoItem} key={todoItem.id} />
      ))
    }
  </section>
);
