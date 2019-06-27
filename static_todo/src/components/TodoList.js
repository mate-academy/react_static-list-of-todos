import React from 'react';
import User from './User'
import TodoItem from './TodoItem'
import './TodoList.css'

function TodoList(props) {
    return (
        Object.keys(props.todos).map((todo, i) => {
            return (
                <div className="row">
                    <TodoItem title={props.todos[todo].title} completed={props.todos[todo].completed} />
                    <User name={props.todos[todo].name} mail={props.todos[todo].mail} />
                </div>
            )
        })
    );
}

export default TodoList;
