// Add the required types and props
// import todos from '../../api/todos';
// import classNames from 'classnames';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type TodoType = {
  todos: Todo[]
};

export const TodoList: React.FC<TodoType> = ({ todos = [] }) => (
  <>
    {todos.map(todo => (
      <TodoInfo key={todo.id} todo={todo} />
    ))}
  </>
);
