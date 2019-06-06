import React from 'react';
import TodoList from './TodoList';
import {todos} from '../todos';

class User extends React.Component {
  render() {
    return (
      <div>
        <h2 className = {this.props.id}>{this.props.name} ({this.props.phone})</h2>
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
}

export default User;