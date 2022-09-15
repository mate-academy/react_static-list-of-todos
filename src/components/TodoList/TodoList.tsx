import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type PropType = {
  todo: Todo[],
};

export const TodoList: React.FC<PropType> = ({ todo }) => (
  <section className="TodoList">
    {todo.map((todoInfo: Todo) => (
      <TodoInfo todoInfo={todoInfo} key={todoInfo.id} />
    ))}
  </section>
);
