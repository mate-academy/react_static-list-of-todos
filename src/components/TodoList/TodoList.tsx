// Don't forget to import the React library
import React from 'react';
import { PreparedTodos } from '../../appTypeDef';
import { TodoInfo } from '../TodoInfo/TodoInfo';
// Create a `TodoList` component accepting an array of `preparedTodos` and
// rendering them as a list

interface TodoListProps {
  preparedToDos: PreparedTodos[];
}

export const TodoList: React.FC<TodoListProps> = ({ preparedToDos }) => {
  return (
    <table className="table table-sm table-dark">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">TITLE</th>
          <th scope="col">STATUS</th>
          <th scope="col">USER</th>
        </tr>
      </thead>
      {preparedToDos.map(todo => (
        <>
          <TodoInfo todo={todo} />
        </>
      ))}
    </table>
  );
};
// Add a default export statement for TodoInfo component to use it in the other files
  // <ul className="ui list">
  //   {preparedToDos.map(todo => (
  //     <li key={todo.id}>
  //       <TodoInfo todo={todo} />
  //     </li>
  //   ))}
  // </ul>
