import React from 'react';
import './TodoInfo.scss';
import { PreparedToDos } from '../../types/preparedToDos';

interface Props {
  toDo: PreparedToDos;
}

const TodoInfo: React.FC<Props> = (props) => {
  const { toDo } = props;
  const { title, completed } = toDo;

  return (
    <div className="task">
      <p className="task__title">
        {title}
      </p>
      <p className="task__status">
        {completed.toString()}
      </p>
    </div>
  );
};

export default TodoInfo;
