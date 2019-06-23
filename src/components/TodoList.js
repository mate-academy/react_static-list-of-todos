import React from 'react';
import {todos} from '../todos'
import {users} from '../users'
import TodoItem from './TodoItem'
import User from './User'

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: this.getAllData(todos, users),
      selectedUser: false,
    };
  }

  getAllData = (todos, users) => {
    const data = todos.map(el => {
      return {
        ...el,
        name: users
          .filter(user => user.id === el.userId)
          .map(user => user.name)
          .join('')
      }
    });
    return data;
  };

  showUserData = (userId) => {
    const copy = {...users[userId-1]};
    const userData = Object.keys(copy)
      .filter(el => el !== 'address' && el !== 'company')
      .map(el => el + ':' + ' ' + copy[el]);
    this.setState({selectedUser: userData})
  }

  render() {
    return (
      <table>
        <tbody>
          <tr className = {this.state.selectedUser ? 'visually-hidden' : ''}>
            <th className = "bold">Name</th>
            <th className = "bold" >Title</th>
            <th className = "bold" >Status</th>
          </tr>

        {
          !this.state.selectedUser ?
            this.state.users.map(user => (
              <TodoItem
                userName = {user.name}
                title = {user.title}
                status = {user.completed}
                userId = {user.userId}
                showUserData = {this.showUserData}
                />

            )) :
              <User user = {this.state.selectedUser}/>
        }
        </tbody>
      </table>
    );
  }
}


export default TodoList;