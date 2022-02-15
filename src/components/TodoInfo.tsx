import React from 'react';
import UserInfo from './UserInfo';
import './TodoInfo.scss';
import { NewItem } from './interface/interface';

type Prop = {
  todoshka: NewItem;
};

const TodoInfo: React.FC<Prop> = ({ todoshka }) => {
  const {
    title,
    completed,
    user,
    id,
  } = todoshka;

  return (
    <li key={id} className="todoInfo">
      <h3>{`Task - ${title}`}</h3>
      <p>{`Completed - ${completed ? 'Yes' : 'No'}`}</p>
      {user && <UserInfo person={user} />}
    </li>
  );
};

export default TodoInfo;
