import React from 'react';
import { IUser } from '../types/IUser';
import './Todo.scss';
import { User } from './User';

type Props = {
  completed:boolean,
  title:string,
  author: IUser | null,
};

export const Todo: React.FC<Props> = ({
  completed,
  title,
  author,
}) => {
  return (
    <>
      <input type="checkbox" className="label__input" checked={completed} />
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
