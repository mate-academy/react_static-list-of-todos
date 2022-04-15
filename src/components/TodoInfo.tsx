import React from 'react';
import { Todo } from '../types/Todo';

type Props = {
  todo : Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <>
    {`${todo.title} - ${todo.completed}`}
  </>
);

// export const TodoInfo: React.FC<Props> = ({ todo }) => (
//   <>
//     <ul>
//       {todo.map(todoInfo => (
//         <li>
//           {`${todoInfo.title} - ${todoInfo.completed}`}
//         </li>
//       ))}
//     </ul>
//   </>
// );
