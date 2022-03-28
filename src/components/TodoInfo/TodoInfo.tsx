import { FC } from 'react';
import { MdRadioButtonUnchecked, MdOutlineCheckCircle } from 'react-icons/md';

import './TodoInfo.scss';

type Props = {
  title: string;
  completed: boolean;
};

export const TodoInfo: FC<Props> = ({ title, completed }) => {
  return (
    <div className="TodoInfo">
      <button
        type="button"
        className="TodoInfo__button"
      >
        {completed
          ? <MdOutlineCheckCircle />
          : <MdRadioButtonUnchecked />}
      </button>
      <p
        className={`${completed
          ? 'TodoInfo__title TodoInfo__title--completed'
          : 'TodoInfo__title'}`}
      >
        {title}
      </p>
    </div>
  );
};
