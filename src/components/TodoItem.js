import React from 'react';
import './TodoItem.css';

import {users} from './users';
import User from './User';

function TodoItem(props) {

  const usersList = users.find(user => user.id === props.userId);

  return (
    <div className="todo">
      <div className="title">{props.title}</div>
      <User name={usersList.name} email={usersList.email}/>
      <span>
        {`${props.status === true ? 'completed' : 'in progres'}`}
      </span>
    </div>
  );
}

export default TodoItem;
