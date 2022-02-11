import React from 'react';
import UserInfo from './UserInfo';
import './TodoInfo.scss';

interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string,
    },
  },
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string,
  },
}

interface NewItem {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
  user: User | null,
}

type Prop = {
  todoshka: NewItem;
};

const TodoInfo: React.FC<Prop> = ({ todoshka }) => {
  return (
    <li
      key={todoshka.id}
      className="todoInfo"
    >
      <h3>
        {'Task - '}
        {todoshka.title}
      </h3>
      <p>
        {'Completed - '}
        {todoshka.completed ? 'Yes' : 'No'}
      </p>
      <UserInfo
        person={todoshka.user}
      />
    </li>
  );
};

export default TodoInfo;
