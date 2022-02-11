import React from 'react';
import TodoInfo from './TodoInfo';
import './TodoList.scss';

interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string,
    },
  },
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string,
  },
}

interface NewItem {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
  user: User | null,
}

type Prop = {
  preparedTodos: NewItem[];
};

const TodoList: React.FC<Prop> = ({ preparedTodos = [] }) => {
  return (
    <>
      <ul className="todoList">
        {preparedTodos.map((todo: NewItem) => {
          return (
            <li
              key={todo.id}
            >
              <TodoInfo
                todoshka={todo}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TodoList;
