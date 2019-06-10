import React from 'react';
import User from './User'
import TodoItem from './TodoItem'

function TodoList(props) {
    return (
        Object.keys(props.todos).map((todo, i) => {
            return (
                <div>
                    <User name={props.todos[todo].name} mail={props.todos[todo].mail} />
                    <TodoItem title={props.todos[todo].title} completed={props.todos[todo].completed} />
                </div>
            )
        })
    );
}

export default TodoList;
