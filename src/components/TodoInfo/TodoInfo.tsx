import React from 'react';
import { Todo } from '../../types/Todo';

import './TodoInfo.scss';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  return (
    <div className="item">
      <h2 className="item__title">{todo.title}</h2>
      <span className="item__status">
        {todo.completed ? (
          <span className="item__status--finished">Finished</span>
        ) : (
          <span className="item__status--unfinished">Still in work</span>
        )}
      </span>
    </div>
  );
};
