import React from 'react';

import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type Props = {
  tods: Todo[];
};

export const TodoList: React.FC<Props> = ({ tods }) => (
  <>
    {tods.map(todo => (
      <TodoInfo todo={todo} key={todo.id} />
    ))}
  </>
);
