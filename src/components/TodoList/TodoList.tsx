import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

import { month, week } from '../../constants/constants';

type Props = {
  todos: Todo[],
};

export const TodoList: React.FC<Props> = ({ todos }) => {
  const date = new Date();
  const currentDay = date.getDay();
  const currentDate = date.getDate();
  const currentMonth = date.getMonth();

  return (
    <div className="TodoList">
      <div className="TodoList__header">
        <h1 className="TodoList__day">
          {`${week[currentDay]}, ${currentDate}`}
        </h1>
        <p className="TodoList__month">
          {month[currentMonth]}
        </p>
      </div>
      <div className="TodoList__content">
        {todos.map(todo => (
          <TodoInfo
            key={todo.id}
            title={todo.title}
            completed={todo.completed}
            user={todo.user}
          />
        ))}
      </div>
    </div>
  );
};
