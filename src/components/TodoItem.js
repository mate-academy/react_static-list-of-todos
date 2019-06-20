import React, { Component } from 'react';

export default class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {todo , user} = this.props;
        return(
            <div className="todo-item">
                <div>title: {todo.title}</div>
                <div>completed: {`${todo.completed}`}</div>
                {user}
            </div>);
    }
}