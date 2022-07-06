import React from 'react';
import { Todo } from '../../types/Todo';
import preparedTodos from '../../api/todos';
import users from '../../api/users';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import './TodoList.scss';

const todos: Todo[] = preparedTodos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId),
}));

export const TodoList: React.FC = () => (
  <>
    <div className="user">
      {todos.map(todo => (
        <div className="user__wrapper" key={todo.id}>
          <TodoInfo todo={todo} />
        </div>
      ))}
    </div>
  </>
);

// Create a `TodoList` component accepting an array of `preparedTodos` and
// rendering them as a list

// Add a default export statement for TodoInfo component to use it in the other files
