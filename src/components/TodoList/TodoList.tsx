import { Todo } from '../types';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import './TodoList.scss';

export type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <div className="list">
      <h1 className="list__h1">STATIC LIST OF TODOS</h1>
      <div>
        {todos.map(todo => <TodoInfo todo={todo} />)}
      </div>
    </div>
  );
};
