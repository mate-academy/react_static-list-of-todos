import React, { useState } from 'react';
import { UserShape } from '../shapes/UserShape';

import './User.scss';

export const User = ({ name, username, email, phone, website }) => {
  const [detailsShown, setDetailsShown] = useState(true);

  return (
    <div className="User">
      <h2 className="User__name">
        {name}
      </h2>
      <div className="User__info">
        <button
          type="button"
          className="User__btn"
          onClick={() => setDetailsShown(!detailsShown)}
        >
          Details
        </button>

        <div
          className="User__details"
          hidden={detailsShown}
        >
          <p>
            <span className="User__info-text">user name:</span>
            {username}
          </p>
          <p>
            <span className="User__info-text">email:</span>
            {email}
          </p>
          <p>
            <span className="User__info-text">phone:</span>
            {phone}
          </p>
          <p>
            <span className="User__info-text">website:</span>
            {website}
          </p>

        </div>
      </div>
    </div>
  );
};

User.propTypes = UserShape;
