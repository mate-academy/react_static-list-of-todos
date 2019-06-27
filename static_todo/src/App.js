import React from 'react';
import './App.css';
import {todos} from "./data/todos";
import {users} from "./data/users";
import TodoList from "./components/TodoList";

function App() {
    const userMap = users.reduce((acc, user) => ({...acc, [user.id]: user}), {});
    const todoWithUser = todos.map((todo) => ({
        ...todo,
        name: userMap[todo.userId]['name'],
        mail: userMap[todo.userId]['email']
    }));

    return (
        <TodoList todos={todoWithUser}/>
    )
        ;
}

export default App;
