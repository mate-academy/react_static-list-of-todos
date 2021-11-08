import { Todo } from '../types';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import './TodoList.scss';

export interface Props {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <div className="list">
      <h1 className="list__h1">STATIC LIST OF TODOS</h1>
      <div>
        {todos.map(todo => <TodoInfo key={todo.id} todo={todo} />)}
      </div>
    </div>
  );
};
