import React from 'react';
import { Todo } from '../../type/Todo';

type Props = {
  todo: Todo
};

const TodoInfo: React.FC <Props> = ({ todo }) => (
  <>

    <div className="content title is-3" data-cy="title">
      {todo.title}
      <br />

      {todo.completed
        ? (
          <p className="title is-5" data-cy="status">
            Complited
          </p>
        )
        : (
          <p className="title is-5" data-cy="status">
            No Complited
          </p>
        )}

    </div>
  </>
);

export default TodoInfo;
