import React from 'react';
import 'bulma/css/bulma.min.css';
import { Box } from 'react-bulma-components';

import { Todo, TodoInfo } from '../TodoInfo/TodoInfo';

type Props = {
  todoList: Todo [];
};

export const TodoList: React.FC<Props> = ({ todoList }) => {
  return (
    <Box style={{ width: 400, margin: 'auto', gap: 50 }}>
      {todoList.map(todo => {
        return (
          <TodoInfo todo={todo} key={todo.id} />
        );
      })}
    </Box>
  );
};
