import React from 'react';

import ToDo from '../types/ToDo';

import './ToDo.scss';

type Props = {
  todo: ToDo,
};

const TodoInfo: React.FC<Props> = ({ todo }) => (
  <div className="list__todo">
    <div className="list__title">
      {todo.title}
    </div>
    <div className="list__status">
      {todo.completed ? 'Done' : 'In process'}
    </div>
  </div>
);

export default TodoInfo;
