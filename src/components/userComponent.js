import React from 'react';

import { userNameProp } from './propTypesVars';

export function User({ name }) {
  return (
    <b>
      {name}
    </b>
  );
}

User.propTypes = userNameProp;
