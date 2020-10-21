import React from 'react';
import { UserShape } from '../shapes/UserShape';
import './User.scss';

export const User = ({ name, taskStatus, email }) => (
  <>
    <button
      className="
        btn
        btn-sm
        dropdown-toggle
        rounded-pill
        border
        border-info
        font-weight-light
        ml-5
        mr-2
      "
      type="button"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
      style={{ fontSize: '10px' }}
    >
      OVNER INFO
    </button>
    <div
      className="dropdown-menu rounded-bottom rounded-lg"
      style={{ fontSize: '10px' }}
    >
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
