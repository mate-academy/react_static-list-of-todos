import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type Date = {
  [key: string]: string;
};

const week: Date = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
};

const month: Date = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December',
};

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
