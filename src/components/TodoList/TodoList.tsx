import React from 'react';
import { TodoType } from '../../react-app-env';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import '../../App.scss';

// Create a `TodoList` component accepting an array of `preparedTodos` and
// rendering them as a list

// Add a default export statement for TodoInfo component to use it in the other files
// eslint-disable-next-line import/no-cycle
type Props = {
  preparedTodos: TodoType[]
};

export const TodoList: React.FC<Props> = ({ preparedTodos }) => (
  <>
    <ul>
      {preparedTodos.map(item => (
        <li className="box box-color box--hover" key={item.id}>
          {item.user
            && (
              <TodoInfo todo={item} />
            )}
        </li>
      ))}
    </ul>
  </>

);
