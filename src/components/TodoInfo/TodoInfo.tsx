import React from 'react';
import { Todo } from '../../types/Todo';
import './TodoInfo.scss';

type Props = {
  todo: Todo;
};

const TodoInfo: React.FC<Props> = (props) => {
  const { todo } = props;

  return (
    <>
      <div>{todo.title}</div>
      <div className="status">
        {(todo.completed) ? (
          'complete'
        ) : ('in procces')}
      </div>
    </>
  );
};

export default TodoInfo;
