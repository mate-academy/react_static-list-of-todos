import React from 'react';
import {todos, users} from './data'
import TodoList from './components/TodoList'

export default function App(){
    return <TodoList todos={todos} users={users}/>
}
