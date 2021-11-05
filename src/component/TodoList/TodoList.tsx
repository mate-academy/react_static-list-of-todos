import classNames from 'classnames';

import { TodoFull } from '../../types/types';
import { TodoInfo } from '../TodoInfo/TodoInfo';

import './TodoList.scss';

type Props = {
  todos: TodoFull[]
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="todo-list">
    {todos.map(todo => (
      <li
        className={classNames('todo-list__item', {
          isDone: todo.completed,
          inProgress: !todo.completed,
        })}
        key={todo.id}
      >
        <TodoInfo todo={todo} />
      </li>
    ))}
  </ul>
);
