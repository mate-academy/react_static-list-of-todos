import { FC } from 'react';

import { TodoList } from './components/TodoList/TodoList';
import { preapareTodos } from './api/data';
import './App.scss';

const App: FC = () => (
  <div className="App">
    <TodoList todos={preapareTodos} />
  </div>
);

export default App;
