import PropTypes from 'prop-types';
import { UserShape } from './UserShape';

export const TodoProptype = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: UserShape,
};
