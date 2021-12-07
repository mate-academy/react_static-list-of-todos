import React from 'react';
import { ITodo } from '../types/ITodo';
import './Todo.scss';
import { User } from './User';

type Props = Omit<ITodo, 'userId' | 'id'>;

export const Todo: React.FC<Props> = ({
  completed,
  title,
  author,
}) => {
  return (
    <>
      <input type="checkbox" className="label__input" checked={completed} readOnly />
      <div className="label">
        <div className="label__title">
          {title}
        </div>
        <div className="label__user-info">
          <User
            name={author === null ? 'no name' : author.name}
            email={author === null ? 'no name' : author.email}
          />
        </div>
      </div>
    </>
  );
};
