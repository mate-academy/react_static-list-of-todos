import { TodoInfo } from '../TodoInfo';
import { Todo } from '../../types/Todo';

type Props = {
  todoL: Todo[];
};

export const TodoList: React.FC<Props> = ({ todoL }) => (
  <section className="TodoList">
    {todoL.map(todoEl => (
      <TodoInfo key={todoEl.id} todoI={todoEl} />
    ))}
  </section>
);
