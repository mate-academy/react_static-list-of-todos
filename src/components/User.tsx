import React from 'react';
import { IUser } from '../types/IUser';
import './Todo.scss';

type Props = Pick<IUser, 'name' | 'email'>;

export const User: React.FC<Props> = ({
  name,
  email,
}) => {
  return (
    <>
      {name}
      <br />
      {email}
    </>
  );
};
