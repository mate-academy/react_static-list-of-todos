import React from 'react';
import './App.scss';

import { UserTodosList } from './components/UserTodosList';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1 className="App__title">Static list of todos</h1>

      <UserTodosList />
    </div>
  );
};

export default App;
