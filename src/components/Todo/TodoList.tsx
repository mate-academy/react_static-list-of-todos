import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from './TodoInfo';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = (props) => {
  const { todos } = props;

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Username</th>
          <th scope="col">Email</th>
          <th scope="col">Title</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todoItem: Todo) => (
          <tr
            className={
              todoItem.completed
                ? 'table-success'
                : 'table-danger'
            }
            key={todoItem.id}
          >
            <TodoInfo todo={todoItem} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};
