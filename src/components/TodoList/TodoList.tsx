import React from 'react';
import TodoInfo from '../TodoInfo/TodoInfo';
import { Todo } from '../../types/Todo';

type Props = {
  todos: Todo[];
};

const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <ul className="App__list">
      {todos.map(todo => (
        <li key={todo.id} className="App__item">
          <TodoInfo
            title={todo.title}
            completed={todo.completed}
            user={todo.user}
          />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
