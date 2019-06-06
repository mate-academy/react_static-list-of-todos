import React from 'react';
import {todos} from '../todos';
import {users} from '../users';
import TodoItem from './TodoItem'
import User from './User'

function TodoList() {
  const rows = [];
   for (let item of todos) {
      for (let user of users) {
        if (item.userId === user.id) {
          rows.push(
            <tr>
              <TodoItem title={item.title}/>
              <User name={user.name} email={user.email}/>
              <td>{item.completed.toString()}</td>
            </tr>
          )
          break; 
        }
      }
    }
  return (
    <table>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}

export default TodoList;
