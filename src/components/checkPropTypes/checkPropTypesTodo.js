import PropTypes from 'prop-types';
import { checkPropTypesUser } from './checkPropTypesUser';

export const checkPropTypesTodo = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape(checkPropTypesUser).isRequired,
}).isRequired;
