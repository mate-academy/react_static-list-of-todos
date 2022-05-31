// Don't forget to import the React library
import React from 'react';
import TodoInfo from '../TodoInfo/TodoInfo';
import { PreparedTodo } from '../../react-app-env';
import './TodoList.scss';
// Create a `TodoList` component accepting an array of `preparedTodos` and
// rendering them as a list
// Add a default export statement for TodoInfo component to use it in the other files
type Props = {
  todos: PreparedTodo[];
};

const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="todo__list">
    {
      todos.map(todo => (
        <li key={todo.id} className="todo__list__item">
          <TodoInfo todo={todo} />
        </li>
      ))
    }
  </ul>
);

export default TodoList;
