import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo/TodoInfo';

import './TodoList.scss';

interface Props {
  content: Todo[];
}

export const TodoList: React.FC<Props> = (props) => {
  const { content } = props;

  return (
    <div className="todos-flex-container">
      <div className="todos-row">
        <div className="todos-row-item-head">Name</div>
        <div className="todos-row-item-head">UserName</div>
        <div className="todos-row-item-head">Email</div>
        <div className="todos-row-item-head">Todo</div>
        <div className="todos-row-item-head">Status</div>
      </div>
      {content.map((contentItem:Todo) => (
        <div className="todos-row" key={contentItem.id}>
          <TodoInfo todo={contentItem} />
        </div>
      ))}
      ;
    </div>
  );
};
