import { ToDoUsersAll } from '../types/ToDoUsersAll';
import { ToDoInfo } from '../ToDoInfo/ToDoInfo';
import './ToDoList.scss';

type Props = {
  todos: ToDoUsersAll[];
};

export const ToDoList: React.FC<Props> = ({ todos }) => (
  <ul className="todo-list">
    {todos.map(todoEach => (
      <li
        key={todoEach.id}
        className="todo__items"
      >
        <ToDoInfo todo={todoEach} />
      </li>
    ))}
  </ul>
);
