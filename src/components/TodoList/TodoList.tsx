import { Todo } from '../../types';
import './TodoList.scss';
import { UserInfo } from '../UserInfo/UserInfo';
import { TodoInfo } from '../TodoInfo/TodoInfo';

export type Props = {
  todoItems: Todo[];
};

export const TodoList: React.FC<Props> = ({ todoItems }) => (
  <ul className="todo">
    {todoItems.map(todoItem => (
      <li className="todo__item" key={todoItem.id}>
        <TodoInfo item={todoItem} />
        {todoItem.user && <UserInfo userItem={todoItem.user} />}
      </li>
    ))}
  </ul>
);
