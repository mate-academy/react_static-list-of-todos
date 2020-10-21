import propTypes from 'prop-types';
import { UserShape } from './UserShape';

export const TodoShape = propTypes.shape({
  id: propTypes.number,
  title: propTypes.string.isRequired,
  completed: propTypes.bool,
  user: propTypes.shape(UserShape),
}).isRequired;
