import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type Prop = {
  todos: Todo[];
}


export const TodoList: React.FC<Prop> = ({ todos = [] }) => {

  return (
    <>
      <section className="TodoList">
        {
          todos.map(todo => (
            <TodoInfo key={todo.id} todo={todo}/>
          ))
        }
      </section>
    </>
  );
};
