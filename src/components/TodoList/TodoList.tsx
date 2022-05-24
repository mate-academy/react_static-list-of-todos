import React from 'react';
import TodoInfo from '../TodoInfo/TodoInfo';
import { Todo } from '../types/List';
import './TodoList.scss';

type Props = {
  listOfTodos: Todo[]
};

const TodoList: React.FC<Props> = ({ listOfTodos }) => {
  return (
    <main className="main">
      <div className="list">
        {listOfTodos.map(todo => (
          <div
            key={todo.id}
            className={`todo ${todo.completed ? 'todo--complete' : ''}`}
          >
            <TodoInfo todo={todo} />
          </div>
        )) }
      </div>
    </main>
  );
};

export default TodoList;
