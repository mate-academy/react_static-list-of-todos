import { PreparedTodo } from './types';
import { TodoInfo } from './TodoInfo';
import './TodoList.scss';

type Props = {
  todos: PreparedTodo[],
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="todo-list">
    {todos.map(todo => <li className="todo-list__element"><TodoInfo todo={todo} /></li>)}
  </ul>
);
