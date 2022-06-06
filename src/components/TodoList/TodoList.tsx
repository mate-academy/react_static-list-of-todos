// Don't forget to import the React library
import { FC } from 'react';
import { PreparedTodos } from '../../types';
import { TodoInfo } from '../TodoInfo';

// Create a `TodoList` component accepting an array of `preparedTodos` and
// rendering them as a list
type Props = {
  todos: PreparedTodos[];
};

export const TodoList: FC<Props> = ({ todos }) => {
  return (
    <ul className="todo__list">
      {todos.map(todo => {
        return (
          <li key={todo.id}>
            <TodoInfo todo={todo} />
          </li>
        );
      })}
    </ul>
  );
};
// Add a default export statement for TodoInfo component to use it in the other files
