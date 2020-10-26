import React from 'react';

import { userPropTypes } from './propTypesVars';

export const User = ({ name }) => (
  <b>
    {name}
  </b>
);

User.propTypes = userPropTypes.isRequired;
