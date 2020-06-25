import PropTypes from 'prop-types';
import { UserTypes } from './UserTypes';

export const TodoTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  user: UserTypes,
});
