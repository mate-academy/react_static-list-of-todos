import React from 'react';
import { User } from '../../Type/Type';

type Props = {
  todos: User;
};
export const UserInfo: React.FC<Props> = (props) => {
  const { todos } = props;
  const { name, username, email } = todos;

  return (
    <>
      <span>
        <b>{'Name - '}</b>
        {name}
      </span>
      <br />
      <span>
        <b>{'Username - '}</b>
        {username}
      </span>
      <br />
      <span>
        <b>{'Email - '}</b>
        {email}
      </span>
    </>
  );
};
