import React from 'react';
import classNames from 'classnames';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { UserInfo } from '../UserInfo/UserInfo';
import './ToDoList.scss';

interface Geo {
  lat: string,
  lng: string,
}

interface Address {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: Geo,
}

interface Company {
  name: string,
  catchPhrase: string,
  bs: string,
}

interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address: Address,
  phone: string,
  website: string,
  company: Company,
}

interface ToDo {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
  user: User | null,
}

interface ToDoList {
  todoList: ToDo[],
}

export const TodoList: React.FC<ToDoList> = ({ todoList }) => (
  <ul className="list">
    {
      todoList.map(item => (
        <li
          key={item.id}
          className={
            classNames(
              'list__item',
              { 'list__item-completed': item.completed },
            )
          }
        >
          <div className="container">
            <TodoInfo
              title={item.title}
              completed={item.completed}
            />

            <UserInfo
              name={item.user?.name}
              email={item.user?.email}
            />
          </div>
        </li>
      ))
    }
  </ul>
);
