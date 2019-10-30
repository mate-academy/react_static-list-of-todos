import React, {Component} from 'react';
import User from './User';
import './UserList.css';

class UserList extends React.Component {
  render() {
  const usersList = [];
    for (const eachUser of this.props.users) {
      usersList.push(
      <User id = {eachUser.id} name = {eachUser.name} phone = {eachUser.phone} key={eachUser.id}/>
    );
  }
  return (
    <div>
     {usersList}
    </div>
    );
  }
}

export default UserList;