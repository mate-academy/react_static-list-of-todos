// Don't forget to import the React library
import React from 'react';
import { PreparedTodos } from '../../react-app-env';
import { TodoInfo } from '../TodoInfo/TodoInfo';

// Create a `TodoList` component accepting an array of `preparedTodos` and
// rendering them as a list
interface Props {
  todosList: PreparedTodos[],
}

export const TodoList: React.FC<Props> = ({ todosList }) => {
  return (
    <ul className="block">
      {todosList.map(el => (
        <TodoInfo todoInfo={el} />
      ))}
    </ul>
  );
};

// Add a default export statement for TodoInfo component to use it in the other files
