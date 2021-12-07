import React from 'react';
import './Todo.scss';

type Props = {
  completed:boolean,
  title:string,
  author: [string, string],
};

export const Todo: React.FC<Props> = ({
  completed,
  title,
  author,
}) => {
  return (
    <>
      <input id="label" type="checkbox" className="label__input" checked={completed} />
      <label htmlFor="label" className="label">
        <div className="label__title">
          {title}
        </div>
        <div className="label__email">
          {author[0]}
          <br />
          {author[1]}
        </div>
      </label>
    </>
  );
};
