// import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo/TodoInfo';

type ToDosType = {
  todos: Todo[]
};

export const TodoList = ({ todos }: ToDosType) => (

  <section className="TodoList">
    {todos.map(todo => {
      return (
        <TodoInfo todo={todo} key={todo.id} />
      );
    })}
  </section>
);
