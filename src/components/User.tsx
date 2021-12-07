import React from 'react';
import './Todo.scss';

type Props = {
  name:string,
  email:string,
};

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
