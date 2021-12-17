import React from 'react';
import TodoInfo from '../TodoInfo/TodoInfo';
import { Todo } from '../../types/Todo';

type Props = {
  todos: Todo[];
};

const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <>
      {todos.map(todo => (
        <li key={todo.id} className="App__item">
          <TodoInfo
            title={todo.title}
            completed={todo.completed}
            user={todo.user}
          />
        </li>
      ))}
    </>
  );
};

export default TodoList;
