import { TodoInfo } from '../TodoInfo';

import { Todo } from '../../types/Todo';

type Props = {
  todos: Todo[]
};

// Add the required types and props
export const TodoList: React.FC<Props> = ({ todos = [] }) => (
  <ul className="TodoList">
    {todos.map(todo => (
      <TodoInfo
        todo={todo}
        key={todo.id}
      />
    ))}
  </ul>
);
