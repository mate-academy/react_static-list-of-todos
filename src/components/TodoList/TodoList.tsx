import { Todo } from '../../types';
import './TodoList.scss';

type Props = {
  todoItems: Todo[];
};

export const TodoList: React.FC<Props> = ({ todoItems }) => (
  <ul className="todo">
    {todoItems.map(todoItem => (
      <li className="todo__item" key={todoItem.id}>
        <h3 className="todo__title">
          {todoItem.title}
        </h3>
        <span className="todo__status">
          Status:
          {(todoItem.completed) ? ' Done! ' : ' In progress... '}
        </span>
        <span className="todo__author">
          Autor:
          {(todoItem.user) ? (` ${todoItem.user.name} `) : ' Unqnow '}
        </span>
      </li>
    ))}
  </ul>
);
