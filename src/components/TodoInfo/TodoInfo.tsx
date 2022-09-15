import React from 'react';
import { UserInfo } from '../UserInfo';
import { Todo } from '../../types/Todo';
import classNames from 'classnames' 

type Prop = {
  todo: Todo;
}

export const TodoInfo: React.FC<Prop> = ({ todo }) => {
  const {
    title,
    completed,
    user
  } = todo

  return (
    <>
      <article className={classNames(
        'TodoInfo',
        {'TodoInfo--completed' : completed}
      )}
      >
        <h2 className='TodoInfo__title'>
          {title}
        </h2>

       {user && <UserInfo user={user}/>} 
      </article>
    </>
  )
}