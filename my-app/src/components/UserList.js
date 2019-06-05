import React from 'react';
import User from './User';
import './UserList.css';

function UserList(props) {
  const usersList = [];
  for (const eachUser of props.users) {
    usersList.push(
    <User name = {eachUser.name} phone = {eachUser.phone} key={eachUser.id}/>
    );
 }
  return (
    <div>
     {usersList}
    </div>
   );
}

export default UserList;