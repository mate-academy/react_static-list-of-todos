import React from 'react';
import { Todo } from '../../types/Todo';
import './TodoInfo.scss';

type Props = {
  todo: Todo;
};

const TodoInfo: React.FC<Props> = (props) => {
  const { todo } = props;
  const { completed, title } = todo;

  return (
    <>
      <div>{title}</div>
      <div className="status">
        {(completed) ? (
          'completed'
        ) : ('in procces')}
      </div>
    </>
  );
};

export default TodoInfo;
