import PropTypes from 'prop-types';
import { userShape } from './UserShape';

export const todoShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: userShape,
});
