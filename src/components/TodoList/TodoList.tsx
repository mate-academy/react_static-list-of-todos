import React from 'react';
import { TodoInfo } from '../TodoInfo';
import { Todo } from '../../types/Todo';

type Props = {
  todosWithUser: Todo[];
};
// Add the required types and props
export const TodoList: React.FC<Props> = ({ todosWithUser }) => (
  <section className="TodoList">
    {
      todosWithUser.map(todoWithUser => (
        <TodoInfo
          key={todoWithUser.id}
          todoWithUser={todoWithUser}
        />
      ))
    }
  </section>
);
