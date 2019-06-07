import React, {Component} from 'react';
import TodoItem from './TodoItem.jsx';
import User from './User.jsx'

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: this.props.todos,
      users: this.props.users
    };
  }

  componentWillMount() {
    const users = this.state.users.reduce((acc, item) => {
      acc[item.id] = item;
      return acc;
    }, {});
    this.setState(() => ({ users }));
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        {todos.map((item, index) => (
          <TodoItem
            key={index}
            todo={item}
            name={this.state.users[item.userId.name]}
            user={<User info={this.state.users[item.userId] || {}} />}
          />
        ))}
      </div>
    );
  }
}
