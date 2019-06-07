import React, { Component } from  'react';
import { todoS, users} from './data';
import TodoList from './Components/TodoList.jsx';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList users={users} todoS={todoS}/>
      </div>
    )
  }
}