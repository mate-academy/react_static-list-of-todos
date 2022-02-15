import React from 'react';
import { User } from './interface/interface';

type Prop = {
  person: User;
};

const UserInfo: React.FC<Prop> = ({ person }) => {
  return (
    <h3>{`${person.name} - ${person.email}`}</h3>
  );
};

export default UserInfo;
