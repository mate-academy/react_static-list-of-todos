import React, {Component} from 'react';
import TodoItem from './TodoItem';
import User from './User';

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: this.props.todos || [],
            users: this.props.users || []
        };
    }

    componentWillMount() {
        const users = this.state.users.reduce((acc,item) => {
            acc[item.id] = item;
            return acc;
        }, {})
        this.setState(() => ({users}));
    }

    render() {
        const {todos} = this.state;

        return (
            <div>
                {todos.map((item,index) => (
                    <TodoItem 
                    key={index} 
                    name={this.state.users[item.userId.name]}
                    todo={item} 
                    user={<User name={this.state.users[item.userId].name} email={this.state.users[item.userId].email}/>}
                    />
                ))}
            </div>
        );
    }
}