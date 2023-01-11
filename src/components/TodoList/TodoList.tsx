import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type List = {
  todos: Todo[]
};

export const TodoList: React.FC<List> = ({ todos }) => (
  <ul className="TodoList">
    {todos.map(todo => <TodoInfo todo={todo} />)}
  </ul>
);
