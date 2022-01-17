import { Todo } from '../../types/Types';
import { TodoInfo } from '../TodoInfo';

type Props = {
  todoList: Todo[]
};

export const TodoList: React.FC<Props> = ({ todoList }) => (
  <ul>
    {todoList.map((todoItem) => (
      <li key={todoItem.id}>
        <TodoInfo todo={todoItem} />
      </li>
    ))}
  </ul>
);
