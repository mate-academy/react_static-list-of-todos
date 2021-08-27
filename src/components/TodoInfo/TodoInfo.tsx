import React from 'react';
import './TodoInfo.scss';
import { PreparedToDos } from '../../types/preparedToDos';

type Props = {
  toDo: PreparedToDos,
};

const TodoInfo: React.FC<Props> = ({ toDo }) => (
  <div className="task">
    <p className="task__title">
      {toDo.title}
    </p>
    <p className="task__status">
      {toDo.completed.toString()}
    </p>
  </div>
);

export default TodoInfo;
