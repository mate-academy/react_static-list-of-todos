import React from 'react';
import './TodoList.scss';

import { PreparedToDos } from '../../types/preparedToDos';
import UserInfo from '../UserInfo/UserInfo';
import TodoInfo from '../TodoInfo/TodoInfo';

type Props = {
  tasksToDo: PreparedToDos[],
};

const TodoList: React.FC<Props> = ({ tasksToDo }) => (
  <div className="task-table">
    <ul className="task-table__list">
      {tasksToDo.map((toDo: PreparedToDos) => (
        <li
          key={toDo.id}
          className={toDo.completed
            ? 'task-table__item task-table__item--true'
            : 'task-table__item task-table__item--false'}
        >
          <div className="task-table__user-info">
            <UserInfo user={toDo.user} />
          </div>
          <div className="task-table__task-info">
            <TodoInfo toDo={toDo} />
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default TodoList;
