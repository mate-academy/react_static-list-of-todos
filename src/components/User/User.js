import React from 'react';
import { UserShape } from '../shapes/UserShape';
import './User.scss';

export const User = ({ name, taskStatus, email }) => (
  <>
    <button
      // className={`${taskStatus ? 'js-green' : 'js-red'}`, 'btn'}
      className="btn btn-sm dropdown-toggle rounded-pill border border-info"
      type="button"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      Ovner info
    </button>
    <div className="dropdown-menu rounded-bottom rounded-lg">
      <span className="dropdown-item rounded-pill">
        <b>Full Name: </b>
        {name}
      </span>
      <span className="dropdown-item rounded-pill">
        <b>Email: </b>
        {email}
      </span>
    </div>
  </>
);

User.propTypes = UserShape;
