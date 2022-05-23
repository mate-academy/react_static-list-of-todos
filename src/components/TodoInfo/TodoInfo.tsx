import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import Chip from '@mui/material/Chip';
import classNames from 'classnames';

import { UserInfo } from '../UserInfo';
import { TodoWidthUser } from '../../react-app-env';
import './TodoInfo.scss';

type Props = {
  todoWidthUser: TodoWidthUser;
};

export const TodoInfo: React.FC<Props> = ({ todoWidthUser }) => {
  const {
    title,
    completed,
    user,
  } = todoWidthUser;

  return (
    <li className={classNames(
      'todoItemUser',
      {
        'todoItemUser--done': completed,
      },
    )}
    >
      <Chip
        className="todoTitle"
        data-cy="title"
        icon={<MilitaryTechIcon />}
        label={`Title: ${title}`}
        color="primary"
        variant="outlined"
      />

      <div className="todoCompletedTask">
        <Chip
          className="todoCompletedTaskIcon"
          icon={<FactCheckIcon />}
          label="Task Status:"
          color="primary"
          variant="outlined"
        />

        <Checkbox
          className="todoCompletedTaskCheckbox"
          checked={completed}
          icon={<CheckCircleOutlineIcon />}
          checkedIcon={<CheckCircleIcon />}
          data-cy="status"
          color="primary"
          sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
        />
      </div>

      <div className="todoUserInfo">
        <UserInfo userInfo={user} />
      </div>
    </li>
  );
};
