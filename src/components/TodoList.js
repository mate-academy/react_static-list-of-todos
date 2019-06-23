import React from 'react';
import {todos} from '../todos'
import {users} from '../users'
import TodoItem from './TodoItem'
import User from './User'

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: this.getAllData(),
      selectedUser: false,
    };
  };

  getAllData = () => {
    const data = todos.map(el => {
      return {
        ...el,
        name: users
          .filter(user => user.id === el.userId)
          .map(user => user.name)
          .join(''),
        completed: el.completed ? 'completed' : 'in progres',
      };
    });
    return data;
  };

  showUserData = (userId) => {
    const copy = {...users[userId - 1]};
    const userData = Object.keys(copy)
      .filter(el => el !== 'address' && el !== 'company')
      .map(el => el + ':' + ' ' + copy[el]);
    this.setState({selectedUser: userData});
  };

  render() {
    return (
      <div>
        {this.state.selectedUser ?
          (<User user={this.state.selectedUser}/>) :
          (
            <table>
              <thead>
              <tr>
                <th>Name</th>
                <th>Title</th>
                <th>Status</th>
              </tr>
              </thead>
              <tbody>
              {
                this.state.todos.map(item => (
                  <TodoItem
                    userName={item.name}
                    title={item.title}
                    status={item.completed}
                    userId={item.userId}
                    showUserData={this.showUserData}
                  />

                ))
              }
              </tbody>
            </table>
          )
        }
      </div>
    );
  }
};


export default TodoList;