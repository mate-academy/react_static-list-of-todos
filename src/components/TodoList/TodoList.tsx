import { TodoInfo } from '../TodoInfo';
import { Todos } from '../../types/PropTypes';

type Props = {
  todoList: Todos[];
};

export const TodoList: React.FC<Props> = ({ todoList }) => (
  <ul className="todo-list">
    {todoList.map((todoItem) => (
      <li key={todoItem.id} className="todo-item">
        <TodoInfo todoInfo={todoItem} />
      </li>
    ))}
  </ul>
);
