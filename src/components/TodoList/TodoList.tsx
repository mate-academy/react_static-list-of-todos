import React from 'react';

import './TodoList.scss';

import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type Props = {
  todoList: Todo[]
};

export const TodoList: React.FC<Props> = ({ todoList = [] }) => (
  <section className="TodoList">
    {
      todoList.map((item: Todo) => {
        return <TodoInfo todoItem={item} key={item.id} />;
      })
    }
  </section>
);
