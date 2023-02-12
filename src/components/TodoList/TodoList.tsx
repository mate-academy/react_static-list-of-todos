import React from 'react';
import { TodoInfo } from '../TodoInfo';
import { Todo } from '../../types/Todo';

type Props = {
  tasks: Todo[]
};
export const TodoList: React.FC<Props> = ({ tasks }) => (
  <>
    <section className="TodoList">
      {tasks.map(task => (
        <TodoInfo task={task} key={task.id} />
      ))}
    </section>
  </>
);
