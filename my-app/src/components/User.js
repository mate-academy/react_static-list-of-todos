import React from 'react';
import TodoList from './TodoList';
import {todos} from '../todos';

function User(props) {
   return (
    <div>
      <h2 className = {props.id}>{props.name} ({props.phone})</h2>
    <table>
      <thead>
       <tr>
         <th> TODO </th>
         <th> STATUS </th>
       </tr>
      </thead>
      <TodoList todo = {todos}/>
    </table>
  </div>
  );
}

export default User;