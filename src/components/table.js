import React from 'react';
import './table.css';
import todos from '../api/todos';
import users from '../api/users';


/* const data = () => {
 return todos.map((item) => {
   return {
     ...item,
     user: users.find((user) => user.id === item.userId),
   }
 })
}

console.log(data());  */

/* const arr = [];

  for (let item of todos) {
    for (let user of users) {
      if (item.userId === user.id) {
        arr.push(
          `<tr>
          <td>${item.title}</td>
          <td><a href="${user.email}">${user.name}</a></td>
          ${item.completed ? `<td class="correct">${item.completed}</td>` :
          `<td class="incorrect">${item.completed}</td>`}
          </tr>`
        );
      break;
    }
  }
} */

const data = () => {

  const arrData = [];

    for (let item of todos) {
      for (let user of users) {
        if (item.userId === user.id) {
          arrData.push(
            <tr>
            <td>{item.title}</td>
            <td><a href={user.email}>{user.name}</a></td>
            { item.completed ? <td class="correct">{`${item.completed}`}</td> :
            <td class="incorrect">{`${item.completed}`}</td> }
            </tr>
          );
        break;
      }
    }
  }

  return arrData;
}

const Table = () => {
  return (
    <table>
        <thead>
          <tr>
          <th>ToDo items</th>
          <th>Users</th>
          <th>State</th>
          </tr>
        </thead>
        <tbody>
        {data()}
        </tbody>
    </table>
  )
}

export default Table;
