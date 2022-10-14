import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type Props = {
  todosArr: Todo[];
};

export const TodoList: React.FC<Props> = ({ todosArr = [] }) => (
  <section className="TodoList">
    {todosArr.map((oneTodo: Todo) => (
      <div key={oneTodo.id}>
        <TodoInfo {...oneTodo} />
      </div>
    ))}
  </section>
);
