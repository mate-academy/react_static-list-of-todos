import React from 'react';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  data: Todo;
};

export const TodoInfo: React.FC<Props> = ({ data }) => (
  <>
    <h2 className="TodoInfo__title">{data.title}</h2>

    <UserInfo user={data.user} />
  </>
);
