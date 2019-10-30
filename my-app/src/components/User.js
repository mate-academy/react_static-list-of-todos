import React from 'react';
import TodoList from './TodoList';
import {todos} from '../todos';

class User extends React.Component {
  render() {
    let userTasks = [];
    for (const element of todos) {
      if(element.userId === this.props.id) {
        userTasks.push(element);
      }
    }
    return (
      <div>
        <h2>{this.props.name} ({this.props.phone})</h2>
      <table>
        <thead>
         <tr>
           <th> TODO </th>
           <th> STATUS </th>
         </tr>
        </thead>
        <TodoList todo = {userTasks}/>
      </table>
    </div>
    );
  } 
}

export default User;