import React from 'react';
import { TodoUser } from '../TodoUser/TodoUser';
import { Todo } from '../../types/Todo';
import './TodoInfo.scss';

type Props = Omit<Todo, 'id'>;

export const TodoInfo: React.FC<Props> = ({ title, completed, user }) => (
  <>
    <div className="todo__info">
      <h2 className="todo__title">{title}</h2>
    </div>

    <div className="todo__progress">
      {
        completed
          ? <img className="todo__image" src="./images/tick.png" alt="completed" />
          : <img className="todo__image" src="./images/cross.png" alt="in progress" />
      }
    </div>
    {user && <TodoUser {...user} />}
  </>
);
