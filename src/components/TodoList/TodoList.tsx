// Add the required types and props
import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type Props = {
  preparedTodos: Todo[]
};

export const TodoList: React.FC<Props> = ({ preparedTodos }) => (
  <>
    <div className="App">
      <h1 className="App__title">Static list of todos</h1>

      <section className="TodoList">
        {preparedTodos.map(todos => (
          <TodoInfo todo={todos} />
        ))}
      </section>
    </div>
  </>
);
