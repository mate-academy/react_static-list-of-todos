import React from 'react'
import {users} from './users'
import User from './User';


export default function TodoItem(props) {
  const listOfUsers = users.find(user => user.id === props.userId);
  console.log(listOfUsers);
  

  return (
    <tr>
      <td>{props.title}</td>
      <User name = {listOfUsers.name} email = {listOfUsers.email}/>
      <td className = {props.status === true ?'completed' : 'in-process'}>
       {`${props.status === true ? 'completed' : 'in-process'}`}
       </td>
    </tr>
  )
}
